package com.patrickhuijten.server.controllers

import org.openapitools.api.HikesApi
import org.openapitools.model.Hike
import org.openapitools.model.HikesResponse
// import org.openapitools.model.HikeResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class HikesController : HikesApi {
    override fun listHikes(): ResponseEntity<HikesResponse> {
        return ResponseEntity.ok(
            HikesResponse(
                listOf(
                    Hike(
                        id = 0,
                        name = "Black forest - 🇩🇪",
                        length = 70.8,
                        thumbnail = "https://i.imgur.com/9c6DEkO.jpg",
                        unit = Hike.Unit.Kilometer,
                    ),
                    Hike(
                        id = 1,
                        name = "Picos de Europa - 🇪🇸",
                        length = 74.2,
                        thumbnail = "https://i.imgur.com/tWlWiUt.jpg",
                        unit = Hike.Unit.Kilometer,
                    ),
                    Hike(
                        id = 2,
                        name = "Saxon Switzerland - 🇩🇪",
                        length = 19.2,
                        thumbnail = "https://i.imgur.com/KxyPdVS.jpg",
                        unit = Hike.Unit.Kilometer,
                    ),
                    Hike(
                        id = 3,
                        name = "Dolomites - 🇮🇹",
                        length = 16.2,
                        thumbnail = "https://i.imgur.com/GdSARCm.jpg",
                        unit = Hike.Unit.Kilometer,
                    ),
                    Hike(
                        id = 4,
                        name = "Mt. Pilates - 🇨🇭",
                        length = 14.2,
                        thumbnail = "https://i.imgur.com/DpHTgnx.jpg",
                        unit = Hike.Unit.Kilometer,
                    ),
                ),
            ),
        )
    }

  /*  override fun getHike(hikeId: kotlin.Long): ResponseEntity<HikeResponse> {
        return ResponseEntity.ok(
            HikeResponse(
                Hike(
                    id = 0,
                    name = "Black forest - 🇩🇪",
                    length = 70.8,
                    thumbnail = "https://i.imgur.com/9c6DEkO.jpg",
                    unit = Hike.Unit.Kilometer,
                ),
            ),
        )
    }
    */
}
