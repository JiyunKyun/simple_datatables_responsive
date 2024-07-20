$(document).ready(function() {
	var table = $('#example').DataTable({
		dom: '<"top"i>rt<"bottom"lp><"clear">',
		pagingType: 'simple_numbers',
		language: {
			paginate: {
				first: "<<",
				last: ">>",
				next: ">",
				previous: "<",
			},
		},
		order: [],
		columnDefs: [
			{ targets: [0, 3], orderable: false }, // Menonaktifkan pengurutan pada kolom
			// { targets: [19], visible: false }, // Sembunyikan kolom
		],
		initComplete: function () {
			// Move the length menu (rows per page)
			var $lengthSelect = $('#example_length');
			$('#custom-rows').append($lengthSelect);

			// Move the search input
			var $searchInput = $('#example_filter');
			$('#search-custom').append($searchInput);

			// Move the info
			var $info = $('#example_info');
			$('#custom-info').append($info);

			// Move the pagination
			var $pagination = $('#example_paginate');
			$('#custom-pagination').append($pagination);
		}
	});

	// Custom search input
	$('#search-custom input').on('keyup', function () {
		table.search(this.value).draw();
	});
});