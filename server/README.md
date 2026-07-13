# Server

Spring Boot / Kotlin backend.

## Prerequisites

Install OpenJDK 17 via [Homebrew](https://brew.sh):

```sh
brew install openjdk@17
```

After installation, follow the caveats printed by Homebrew to make the JDK available to system Java wrappers:

```sh
sudo ln -sfn "$(brew --prefix)/opt/openjdk@17/libexec/openjdk.jdk" /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

Verify the install:

```sh
java -version
```

## Run

```sh
./gradlew bootRun
```
