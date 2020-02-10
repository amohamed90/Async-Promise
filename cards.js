$(async function () {
  
  // // CALLBACKS

  // $.get("https://deckofcardsapi.com/api/deck/new/shuffle/", function (resp) {
  //   const deckId = resp.deck_id;
  //   $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`, function (resp) {
  //     const suit1 = resp.cards[0].suit;
  //     const value1 = resp.cards[0].value;
  //     $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`, function (resp) {
  //       const suit2 = resp.cards[0].suit;
  //       const value2 = resp.cards[0].value;
  //       console.log(`${value1} of ${suit1} AND ${value2} of ${suit2}`)
  //     });
  //   });
  // });

  // let deckId;

  // $.get("https://deckofcardsapi.com/api/deck/new/shuffle/", function (resp) {
  //   deckId = resp.deck_id;
  // });
  
  // $("#new-card").on("click", function () {
  //   $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`, function (resp) {
  //     const suit = resp.cards[0].suit;
  //     const value = resp.cards[0].value;
  //     $("#card-container").append(`<p>${value} of ${suit}</p>`)
  //   });
  // });

  // // PROMISES

  // let suit1; 
  // let value1; 
  // let deckId; 

  // $.get("https://deckofcardsapi.com/api/deck/new/shuffle/").then( resp => {
  //   deckId = resp.deck_id;
  //   return $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  // }).then( resp => {
  //   suit1 = resp.cards[0].suit;
  //   value1 = resp.cards[0].value;
  //   return $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  // }).then( resp => {
  //   let suit2 = resp.cards[0].suit;
  //   let value2 = resp.cards[0].value;
  //   console.log(`${value1} of ${suit1} AND ${value2} of ${suit2}`)
  // });



  // $.get("https://deckofcardsapi.com/api/deck/new/shuffle/").then( resp => {
  //   let deckId = resp.deck_id;

  //   $("#new-card").on("click", function () {
  //     $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then( resp => {
  //       const suit = resp.cards[0].suit;
  //       const value = resp.cards[0].value;
  //       $("#card-container").append(`<p>${value} of ${suit}</p>`)
  //     });
  //   });
  // });




  // //PROMISES

  // // change top funciton to be async
  // // await deckRequest to use value for other requests
  // async function twoCardsAwait(){
  //   deckRequest = await $.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
  //   const deckId = deckRequest.deck_id;
  
  //   let card1Request = $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  //   let card2Request = $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    
  //   let cardPromises = await Promise.all([card1Request, card2Request]);
  
  //   const suit1 = cardPromises[0].cards[0].suit;
  //   const value1 = cardPromises[0].cards[0].value;
    
  //   const suit2 = cardPromises[1].cards[0].suit;
  //   const value2 = cardPromises[1].cards[0].value;
  
  //   console.log(`${value1} of ${suit1} AND ${value2} of ${suit2}`);
  // }

  // twoCardsAwait();


  // change top funciton to be async
  const deckRequest = await $.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
  const deckId = deckRequest.deck_id;


  $("#new-card").on("click", async function () {
    let resp = await $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    // const suit = resp.cards[0].suit;
    // const value = resp.cards[0].value;
    const image = resp.cards[0].image;
      $("#card-container").html(`<image src="${image}"></image>`)
      // $("#card-container").append(`<p>${value} of ${suit}</p>`)
  });
})
