var unirest = require("unirest");

var req = unirest("GET", "http://its.patientsfirst.org.nz/RestService.svc/Terminz/ValueSet/$expand");

req.query({
  "identifier": "http://snomed.info/sct?fhir_vs=refset/142321000036106"
});

req.headers({
  "accept": "application/json+fhir"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
