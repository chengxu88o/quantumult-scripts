
// youtube_trial.js
$done({body: JSON.stringify({
  "contents": {
    "singleColumnBrowseResultsRenderer": {
      "tabs": [{
        "tabRenderer": {
          "content": {
            "sectionListRenderer": {
              "contents": [{
                "itemSectionRenderer": {
                  "contents": [{
                    "compactPromoRenderer": {
                      "title": {
                        "simpleText": "免费试用 YouTube Premium"
                      },
                      "description": {
                        "simpleText": "享受无广告观看、背景播放、下载和 YouTube Music Premium 等功能"
                      },
                      "button": {
                        "buttonRenderer": {
                          "text": {
                            "simpleText": "立即试用"
                          },
                          "navigationEndpoint": {
                            "urlEndpoint": {
                              "url": "/premium"
                            }
                          }
                        }
                      }
                    }
                  }]
                }
              }]
            }
          }
        }
      }]
    }
  }
})});
