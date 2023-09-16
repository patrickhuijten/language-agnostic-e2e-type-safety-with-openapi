import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.1.3"
    id("io.spring.dependency-management") version "1.1.3"
    id("org.openapi.generator") version "6.6.0"
    kotlin("jvm") version "1.8.22"
    kotlin("plugin.spring") version "1.8.22"
}

group = "com.patrickhuijten"
version = "0.0.1-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    implementation("org.openapitools:openapi-generator:7.0.0") {
        exclude("org.slf4j")
    }
}

sourceSets {
    getByName("main") {
        java {
            srcDir("$buildDir/generate-resources/main/src/main/kotlin")
        }
    }
}

tasks {
    compileKotlin {
        dependsOn(openApiGenerate)
    }
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs += "-Xjsr305=strict"
        jvmTarget = "17"
    }
}
val spec = "$rootDir/api.yaml"
openApiGenerate {
    generatorName.set("kotlin-spring")
    inputSpec.set(spec)
    configOptions.set(
        mapOf(
            "enumPropertyNaming" to "original",
            "useSpringBoot3" to "true",
            "interfaceOnly" to "true",
        ),
    )
}

tasks.withType<Test> {
    useJUnitPlatform()
}
