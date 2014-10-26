(function (exports) {

	function clearTable() {
		$('#table').html('');

		var newTable = $(
			'<table id="dataTable" class="tablesorter">' +
				'<thead>' +
					'<tr>' +
						'<th>Vertrags-Titel</th>' +
						'<th>Gesamtkosten</th>' +
						'<th>Haupt Aktivitäten</th>' +
						'<th>Stadt</th>' +
						'<th>???</th>' +
					'</tr>' +
				'</thead>' +
				'<tbody>' +
				'</tbody>' +
			'</table>');
		$('#table').append(newTable);
	}

	function addDataRow(data) {
		var d1 = data.contract_contract_title;
		var d2 = data.contract_total_value_cost;
		var d3 = data.document_main_activities;
		var d4 = data.document_title_town;
		var d5 = data.contract_operator_official_name;
		var row = $('<tr><td>'+d1+'</td><td>'+d2+'</td><td>'+d3+'</td><td>'+d4+'</td><td>'+d5+'</td></tr>');
		$("#dataTable tbody").append(row);
	}

	function sorterRefresh () {
		$("#dataTable")
			.tablesorter({widthFixed: true, widgets: ['zebra']})
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
