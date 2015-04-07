
// Track EXTERNAL link clicks

$('.external').on('click', function () {
                var value = $(this).attr("href");
                ga('send', 'event', 'External', 'click', value);
            });

//Track PDFs

            $('a[href$=".pdf"]').on('click', function () {
                var value = $(this).attr("href");
                ga('send', 'event', 'Download', 'click', value);
            });
