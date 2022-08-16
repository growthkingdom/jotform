JFCustomWidget.subscribe('ready', function () {
  $(function () {
    const settings = JFCustomWidget.getWidgetSettings();

    const countyLabel = JFCustomWidget.getWidgetSetting('county_label');
    const cityLabel = JFCustomWidget.getWidgetSetting('city_label');
    const streetLabel = JFCustomWidget.getWidgetSetting('street_label');
    const noLabel = JFCustomWidget.getWidgetSetting('no_label');
    const postcodeLabel = JFCustomWidget.getWidgetSetting('postcode_label');
    const blocLabel = JFCustomWidget.getWidgetSetting('bloc_label');
    const scLabel = JFCustomWidget.getWidgetSetting('sc_label');
    const etLabel = JFCustomWidget.getWidgetSetting('et_label');
    const apLabel = JFCustomWidget.getWidgetSetting('ap_label');

    const countyPlaceholder = JFCustomWidget.getWidgetSetting('county_placeholder');
    const cityPlaceholder = JFCustomWidget.getWidgetSetting('city_placeholder');
    const streetPlaceholder = JFCustomWidget.getWidgetSetting('street_placeholder');
    const noPlaceholder = JFCustomWidget.getWidgetSetting('no_placeholder');
    const postcodePlaceholder = JFCustomWidget.getWidgetSetting('postcode_placeholder');
    const blocPlaceholder = JFCustomWidget.getWidgetSetting('bloc_placeholder');
    const scPlaceholder = JFCustomWidget.getWidgetSetting('sc_placeholder');
    const etPlaceholder = JFCustomWidget.getWidgetSetting('et_placeholder');
    const apPlaceholder = JFCustomWidget.getWidgetSetting('ap_placeholder');

    initFields({
      countyPlaceholder,
      cityPlaceholder,
      streetPlaceholder,
      noPlaceholder,
      postcodePlaceholder,
      blocPlaceholder,
      scPlaceholder,
      etPlaceholder,
      apPlaceholder,
    });

    $('#county_label').text(countyLabel);
    $('#city_label').text(cityLabel);
    $('#street_label').text(streetLabel);
    $('#no_label').text(noLabel);
    $('#postcode_label').text(postcodeLabel);
    $('#bloc_label').text(blocLabel);
    $('#scara_label').text(scLabel);
    $('#et_label').text(etLabel);
    $('#ap_label').text(apLabel);

    const specificity = JFCustomWidget.getWidgetSetting('specificity');
    const specificityDisplayArr = ['None', 'Bloc', 'Scara', 'Etaj', 'Apartament'];
    const specificityArr = ['bloc', 'scara', 'et', 'ap']; // Fields that can be removed
    const removeIndex = specificityDisplayArr.indexOf(specificity);
    if (removeIndex !== -1) {
      for (let i = specificityArr.length - 1; i >= removeIndex; i--) {
        $(`#${specificityArr[i]}_div`).remove();
      }
    }

    JFCustomWidget.subscribe('submit', function () {
      const valid = $('#postcode').val().length > 0;
      const value = valid ? `some value here` : '';

      JFCustomWidget.sendSubmit({
        valid,
        value,
      });
    });
  });
});
