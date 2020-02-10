$(function() {
  // ways to unpack a promise

  // $.get("http://numbersapi.com/8?json", function (resp) {
  //   console.log(resp.text);
  // });

  // $.get("http://numbersapi.com/8?json").then(function (resp) {
  //   console.log(resp.text);
  // });

  // async function getLuckyNum() {
  //   let resp = await $.get("http://numbersapi.com/8?json");
  //   console.log(resp.text);
  // }

  // $.get("http://numbersapi.com/1..3?json", function (resp) {
  //   for (let key in resp) {
  //     console.log(resp[key].text);
  //   }
  // });

  // $.get("http://numbersapi.com/1..3?json").then(function (resp) {
  //   for (let key in resp) {
  //     console.log(resp[key].text);
  //   }
  // });

  // async function getLuckyNum() {
  //   let resp = await $.get("http://numbersapi.com/1..3?json");
  //   for (let key in resp) {
  //     console.log(resp[key].text);
  //   }
  // }

  // getLuckyNum();

  //  $.get("http://numbersapi.com/8?json", function (resp1) {
  //     console.log(resp1.text);
  //     $.get("http://numbersapi.com/8?json", function (resp2) {
  //       console.log(resp2.text);
  //       $.get("http://numbersapi.com/8?json", function (resp3) {
  //         console.log(resp3.text);
  //         $.get("http://numbersapi.com/8?json", function (resp4) {
  //           console.log(resp4.text);
  //         });
  //       });
  //     });
  //   });

  //  let resp1 = $.get("http://numbersapi.com/8?json");
  //  let resp2 = $.get("http://numbersapi.com/8?json");
  //  let resp3 = $.get("http://numbersapi.com/8?json");
  //  let resp4 = $.get("http://numbersapi.com/8?json");

  //  let respAll = Promise.all([resp1, resp2, resp3, resp4])

  //  respAll.then(function (resp) {
  //    resp.map(value => console.log(value.text));
  //  });

  // async function luckyNum() {
  //   let resp1 = $.get("http://numbersapi.com/8?json");
  //   let resp2 = $.get("http://numbersapi.com/8?json");
  //   let resp3 = $.get("http://numbersapi.com/8?json");
  //   let resp4 = $.get("http://numbersapi.com/8?json");

  //   let respAll = await Promise.all([resp1, resp2, resp3, resp4])

  //   respAll.map(value => { console.log(value.text) });
  // }

  // luckyNum();

})

async function luckyNum() {
  let resp1 = $.get("http://numbersapi.com/8?json");
  let resp2 = $.get("http://numbersapi.com/8?json");
  let resp3 = $.get("http://numbersapi.com/8?json");
  let resp4 = $.get("http://numbersapi.com/8?json");

  let respAll = await Promise.all([resp1, resp2, resp3, resp4])

  respAll.map(value => {
    return value.text
  });
}
