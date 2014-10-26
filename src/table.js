(function (exports) {

	function clearTable() {
		$('#table-container').show();
    $('#table').html('');

		var newTable = $(
			'<table id="dataTable" class="tablesorter">' +
				'<thead>' +
					'<tr>' +
						'<th>Contract Authority</th>' +
						'<th>Contract Operator</th>' +
						'<th>Description</th>' +
						'<th>City</th>' +
						'<th>Value</th>' +
						'<th>Sector</th>' +
						'<th>Offers received</th>' +
						'<th>Ted Link</th>' +
					'</tr>' +
				'</thead>' +
				'<tbody>' +
				'</tbody>' +
			'</table>');
		$('#table').append(newTable);
	}

	function addDataRow(data, marker) {
		// TODO: add dots... 11.000.000,00 €
		
		var ted_value = data.contract_contract_value_cost_eur;
		var ted_num = data.document_doc_no.substr(data.document_doc_no.length - 6);
		
		var row = $(
			'<tr>' +
				'<td>'+ data.contract_authority_official_name +'</td>' +
				'<td>'+ data.contract_operator_official_name +'</td>' +
				'<td title="'+ data.contract_contract_title +'">'+ data.contract_contract_title.substring(0, 60) +'…</td>' +
				'<td>'+ data.document_title_town +'</td>' +
				'<td>€ '+ ted_value +'</td>' +
				'<td>'+ data.document_main_activities +'</td>' +
				'<td>'+ data.contract_offers_received_meaning +'</td>' +
				'<td><a class="ted_url" target="_blank" href="'+ data.document_doc_url +'">'+ ted_num +'</a></td>' +
			'</tr>');
		$("#dataTable tbody").append(row);

		row.data('marker', marker);

		row.bind("mouseover", function (e) {
			row.addClass('highlight');
			var marker = row.data('marker');
			euvis.Map.showInfoBoxForMarker(marker);
			euvis.Map.drawLineToReceipientForMarker([marker]);
		});
		row.bind("mouseout", function (e) {
			row.removeClass('highlight');
			euvis.Map.hideInfoBoxForMarker(marker);
			euvis.Map.removeLineAndReceipient();
		});
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
