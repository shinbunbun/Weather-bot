message = {
      "replyToken" : e.replyToken,
      "messages": [{
        "type": "flex",
        "altText": '天気予報',
        "contents": {
          "type": "bubble",
          "styles": {
            "footer": {
              "separator": true
            }
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "天気予報",
                "weight": "bold",
                "size": "xxl",
                "margin": "md"
              },
              {
                "type": "text",
                "text": `${country}.${cityName}`,
                "size": "md",
                "color": "#aaaaaa",
                "wrap": true
              },
              {
                "type": "separator",
                "margin": "xxl"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xxl",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[0]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[0],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[0]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[1]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[1],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[1]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[2]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[2],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[2]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[3]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[3],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[3]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[4]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[4],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[4]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[5]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[5],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[5]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": date[6] + ":00",
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[6],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[6]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[7]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[7],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/"${icon[7]}.png`,
                        "size": "xl"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": `${date[8]}:00`,
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": weather[8],
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      },
                      {
                        "type": "icon",
                        "url": `https://openweathermap.org/img/w/${icon[8]}.png`,
                        "size": "xl"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "separator",
                "margin": "xxl"
              }
            ]
          }
        }
      }]
    };
  } else {
    message = {
      "replyToken" : e.replyToken,
      "messages" : [{
        "type" : "text",
        "text" : "その郵便番号は存在しておりません"
      }]
    };
  }
  
  const replyData = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + access_token
    },
    "payload" : JSON.stringify(message)
  };
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", replyData);
  
}
