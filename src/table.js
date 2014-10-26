(function (exports) {

	function clearTable() {
		$('#table').html('');

		var newTable = $(
			'<table id="dataTable" class="tablesorter">' +
				'<thead>' +
					'<tr>' +
						'<th>Contractee</th>' +
						'<th>Description</th>' +
						'<th>City</th>' +
						'<th>Value</th>' +
						'<th>Sector</th>' +
						'<th>Offers received</th>' +
					'</tr>' +
				'</thead>' +
				'<tbody>' +
				'</tbody>' +
			'</table>');
		$('#table').append(newTable);
	}

	function addDataRow(data, marker) {
		// TODO: add dots... 11.000.000,00 €
		value = data.contract_contract_value_cost_eur.split('.').join(',');
		var row = $(
			'<tr>' +
				'<td>'+ data.contract_operator_official_name +'</td>' +
				'<td title="'+ data.contract_contract_title +'">'+ data.contract_contract_title.substring(0, 60) +'…</td>' +
				'<td>'+ data.document_title_town +'</td>' +
				'<td>€ '+ value +'</td>' +
				'<td>'+ data.document_main_activities +'</td>' +
				'<td>'+ data.contract_offers_received_meaning +'</td>' +
			'</tr>');
		$("#dataTable tbody").append(row);
	}

	function sorterRefresh () {
		$('#pager').show();
		$("#dataTable")
			.tablesorter({
				size: 5,
				widthFixed: true,
				widgets: ['zebra']})
			.tablesorterPager({
				container: $("#pager"),
				size: 5,
				positionFixed: false
			});
	}

	exports.Table = {};
	exports.Table.clearTable = clearTable;
	exports.Table.addDataRow = addDataRow;
	exports.Table.sorterRefresh = sorterRefresh;

}(window.euvis || (window.euvis = {})));
