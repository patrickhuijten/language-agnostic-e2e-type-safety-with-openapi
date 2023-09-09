package com.patrickhuijten.server.controllers

import org.openapitools.api.HikesApi
import org.openapitools.model.HikesResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class HikesController : HikesApi {
    override fun listHikes(): ResponseEntity<HikesResponse> {
        return ResponseEntity.ok(
            HikesResponse(
                emptyList(),
            ),
        )
    }
}
