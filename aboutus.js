$("#carousel-slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true
});

Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {

  // Create the chart
  Highcharts.stockChart('container', {


    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'Tỷ lệ người tập luyện thể dục thể thao'
    },

    scrollbar: {
      enabled: false
    },
    credits: {
        enabled: false
    },
    navigator: {
        enabled: false
    },

    series: [{
      name: 'Tỷ lệ người tập luyện thể dục thể thao',
      data: data,
      tooltip: {
        valueDecimals: 2
      }
    }]
  });
});