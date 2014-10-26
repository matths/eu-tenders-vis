(function (exports) {
  'use strict';

  var GeoConverter = euvis.GeoConverter;
  var contracts = [];

  var max = 0;
  var min = 10000000;

  function getContract (entry) {
    return {
      _exclude: false,
      contract_id: entry[0],
      contract_doc_no: entry[1],
      contract_type_contract: entry[6],
      contract_location_nuts: GeoConverter.convertNUTS3(entry[9]),
      contract_offers_received_meaning: entry[10],
      contract_operator_town: entry[12],
      contract_operator_official_name: entry[23],
      contract_operator_postal_code: entry[25],
      contract_operator_country: entry[30],
      contract_authority_town: entry[35],
      contract_contract_title: entry[42],
      contract_authority_official_name: entry[46],
      contract_contract_value_cost_eur: entry[66],
      contract_total_value_cost: entry[67],
      contract_total_value_vat_included: entry[69],
      contract_initial_value_cost_eur: entry[70],
      contract_total_value_currency: entry[72],
      document_id: entry[96],
      document_doc_no: entry[97],
      document_orig_language: entry[106],
      document_title_country: entry[108],
      document_orig_nuts: entry[112],
      document_contract_nature: entry[121],
      document_title_town: entry[124],
      document_orig_nuts_code: GeoConverter.convertNUTS3(entry[128]),
      document_award_criteria: entry[129],
      document_main_activities: entry[134],
      document_doc_url: entry[135]
    };
  }

  exports.Contracts = {
    init: function (data) {
      var entries = CSV.parse(data);
      var entry, contract;

      for (var i = 1; i < entries.length; i++) {
        entry = entries[i];
        contract = getContract(entry);

        if (contract.contract_contract_value_cost_eur !== '') {

          if(contract.contract_contract_value_cost_eur > max) {
            max = contract.contract_contract_value_cost_eur;
          }

          if(contract.contract_contract_value_cost_eur < min) {
            min = contract.contract_contract_value_cost_eur;
          }
        }

        contracts.push(contract)
      }

      console.log('parsed', [max, min]);
    },

    getAll: function () {
      return contracts;
    },

    getFiltered: function (query) {
      var contract;
      var i;

      for (i = 0; i < contracts.length; i++) {
        contract = contracts[i];

        if (query.money.max && contract.contract_contract_value_cost_eur > query.money.max ) {
          contract._exclude = true;
          continue;
        }

        if (query.money.min && contract.contract_contract_value_cost_eur < query.money.min) {
          contract._exclude = true;
          continue;
        }

        if (query.sector && contract.document_main_activities !== query.sector) {
          contract._exclude = true;
          continue;
        }

        contract._exclude = false;
      }

      return contracts;
    }
  }





}(window.euvis || (window.euvis = {})));