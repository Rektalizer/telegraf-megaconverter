const data = {
    square_metre: {
        r: '1',
        query: ['m2', 'm^2', 'square metre', /^s(q(u(a(re)?)?)?)?\s?m(et(r(e(s)?)?)?)?$/i, 'метр/кв', 'м2', 'м^2', /^квметр(ов|а|ы|е)?$/i, /^м(етр(ов|а|ы|е)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?м(етр(ов|а|ы|е)?)?$/i]
    },
    square_kilometre: {
        r: '0.000001',
        query: ['km2', 'km^2', 'square kilometre', /^s(q(u(a(re)?)?)?)?\s?k(ilo(met(r(e(s)?)?)?)?)?$/i, 'километр/кв', 'км2', 'км^2', /^килоквметр(ов|а|ы|е)?$/i, /^квкилометр(ов|а|ы|е)?$/i, /^к(ило(метр(ов|а|ы|е)?)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?к(ило(метр(ов|а|ы|е)?)?)?$/i]
    },
    square_decimetre: {
        r: '100',
        query: ['dm2', 'dm^2', 'square decimetre', /^s(q(u(a(re)?)?)?)?\s?d(eci(met(r(e(s)?)?)?)?)?$/i, 'дециметр/кв', 'дм2', 'дм^2', /^дециквметр(ов|а|ы|е)?$/i, /^квдециметр(ов|а|ы|е)?$/i, /^д(еци(метр(ов|а|ы|е)?)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?д(еци(метр(ов|а|ы|е)?)?)?$/i]
    },
    square_centimetre: {
        r: '10000',
        query: ['cm2', 'cm^2', 'square centimetre', /^s(q(u(a(re)?)?)?)?\s?c(enti(met(r(e(s)?)?)?)?)?$/i, 'сантиметр/кв', 'см2', 'см^2', /^сантиквметр(ов|а|ы|е)?$/i, /^квсантиметр(ов|а|ы|е)?$/i, /^с(анти(метр(ов|а|ы|е)?)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?с(анти(метр(ов|а|ы|е)?)?)?$/i]
    },
    square_millimetre: {
        r: '1000000',
        query: ['mm2', 'mm^2', 'square millimetre', /^s(q(u(a(re)?)?)?)?\s?mil(li(met(r(e(s)?)?)?)?)?$/i, 'миллиметр/кв', 'мм2', 'мм^2', /^милликвметр(ов|а|ы|е)?$/i, /^квмиллиметр(ов|а|ы|е)?$/i, /^мил(ли(метр(ов|а|ы|е)?)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?мил(ли(метр(ов|а|ы|е)?)?)?$/i]
    },
    square_mile: {
        r: '0.0000003861',
        query: ['mi2', 'mi^2', 'square mile', /^s(q(u(a(re)?)?)?)?\s?mi(l(e(s)?)?)?$/i, 'миля/кв', 'миля2', 'миля^2', 'мили/кв', 'мили2', 'мили^2', 'миль/кв', 'миль2', 'миль^2', /^ми(л(ь|я|и|ю)?)?\s?к(в(ад(рат(н(ых|ого|ый|ом|ая)?)?)?)?)?$/i, /^к(в(ад(рат(н(ых|ого|ый|ом|ая)?)?)?)?)?\s?ми(л(ь|я|и|ю)?)?$/i]
    },
    square_yard: {
        r: '1.196',
        query: ['yd2', 'yd^2', 'square yard', /^s(q(u(a(re)?)?)?)?\s?ya(r(d(s)?)?)?$/i, 'ярд/кв', 'ярд2', 'ярд^2', 'ярда/кв', 'ярда2', 'ярда^2', 'ярдов/кв', 'ярдов2', 'ярдов^2', /^яр(д(ов|а|ы|е)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?яр(д(ов|а|ы|е)?)?$/i]
    },
    square_feet: {
        r: '10.76',
        query: ['ft2', 'ft^2', 'square feet', /^s(q(u(a(re)?)?)?)?\s?fe(e(t(s)?)?)?$/i, 'фут/кв', 'фут2', 'фут^2', 'фута/кв', 'фута2', 'фута^2', 'футов/кв', 'футов2', 'футов^2', /^фу(т(ов|а|ы|е)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?фу(т(ов|а|ы|е)?)?$/i]
    },
    square_inch: {
        r: '1550',
        query: ['in2', 'in^2', 'square inch', /^s(q(u(a(re)?)?)?)?\s?in(c(h(es)?)?)?$/i, 'дюйм/кв', 'дюйм2', 'дюйм^2', 'дюйма/кв', 'дюйма2', 'дюйма^2', 'дюймов/кв', 'дюймов2', 'дюймов^2', /^дю(йм(ов|а|ы|е)?)?\s?кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?$/i, /^кв(ад(рат(н(ых|ого|ый|ом)?)?)?)?\s?дю(йм(ов|а|ы|е)?)?$/i]
    },
    acre: {
        r: '0.0002471',
        query: [/^ac(r(e(s)?)?)?$/i, /^ак(р(ов|а|ы|е)?)?$/i]
    },
    ar: {
        r: '0.01',
        query: [/^a(r(s)?)?$/i, /^sot(ka|ki|ok)?$/i, /^а(р(ов|ы|е|а)?)?$/i, /^сот(ка|ки|ок|е)?$/i]
    },
    hectare: {
        r: '0.0001',
        query: [/^h(ec(ta(r(e(s)?)?)?)?)?$/i, 'hc', /^hctr(s)?&/i, /^г(ек(та(р(а|ов|ы|е)?)?)?)?$/i, 'га', 'гк', 'гктр', 'гкт']
    }
}

module.exports = data;
