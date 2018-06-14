const predictIt = require('predict-it');
const express = require('express');
const router = express.Router();
// create a model for the response?

router.post('/predictItOne', function(req, res, next){
  const tickerSymbol = req.body.selected;
  console.log(tickerSymbol + ' -->ONE PULL');
  predictIt.market(tickerSymbol).then(data => this.res = data);
  res.status(200).json({
    data: JSON.stringify(this.res),
    contract: JSON.stringify(this.res.Contracts)
  });
});

router.post('/predictItFeat', function(req, res, next){
  const tickerSymbolFeat = req.body.selectedFeatured;
  console.log(tickerSymbolFeat + ' -->FEATURED PULL');
  predictIt.market(tickerSymbolFeat).then(data => this.res = data);
  res.status(200).json({
    data: JSON.stringify(this.res),
    contract: JSON.stringify(this.res.Contracts)
  });
});

router.get('/predictItAll', function(req, res, next){
  do {
    predictIt.all().then(data => this.res = data);
    var status = res.statusCode;
  }while(!status);

  // dont set status until you get the 200 code
  res.status(200).json({
    data: JSON.stringify(this.res),
    contract: JSON.stringify(this.res.Contracts)
  });
});

module.exports = router;

