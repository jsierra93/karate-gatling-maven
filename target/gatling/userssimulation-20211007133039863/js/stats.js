var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "996",
        "ok": "996",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2520",
        "ok": "2520",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "588",
        "ok": "588",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "percentiles1": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles2": {
        "total": "664",
        "ok": "664",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1162",
        "ok": "1162",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1778",
        "ok": "1778",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 844,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 105,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 47,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.861",
        "ok": "9.861",
        "ko": "-"
    }
},
contents: {
"req_get--users-demo-a0b33": {
        type: "REQUEST",
        name: "GET /users/demopostman",
path: "GET /users/demopostman",
pathFormatted: "req_get--users-demo-a0b33",
stats: {
    "name": "GET /users/demopostman",
    "numberOfRequests": {
        "total": "503",
        "ok": "503",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2520",
        "ok": "2520",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "582",
        "ok": "582",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles1": {
        "total": "480",
        "ok": "479",
        "ko": "-"
    },
    "percentiles2": {
        "total": "668",
        "ok": "668",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1141",
        "ok": "1141",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1696",
        "ok": "1696",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 427,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 53,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.98",
        "ok": "4.98",
        "ko": "-"
    }
}
    },"req_get--users-2ea1c": {
        type: "REQUEST",
        name: "GET /users",
path: "GET /users",
pathFormatted: "req_get--users-2ea1c",
stats: {
    "name": "GET /users",
    "numberOfRequests": {
        "total": "493",
        "ok": "493",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2138",
        "ok": "2138",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "594",
        "ok": "594",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "percentiles1": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles2": {
        "total": "661",
        "ok": "661",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1171",
        "ok": "1171",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1928",
        "ok": "1928",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 417,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.881",
        "ok": "4.881",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
