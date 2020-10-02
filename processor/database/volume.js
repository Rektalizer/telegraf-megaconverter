const data = {
    cubic_metre: {
        r: '1',
        query: ['m3', 'm^3', 'cubicmetre', /^cub(ic)?\s*m(et(r(e(s)?)?)?)?$/i, 'метркуб', 'м3', 'м^3', /^кубометр(ов|а|ы|е)?$/i, /^м(етр(ов|а|ы|е)?)?\s*куб(ич(еск(их|ого|ий|ом)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом)?)?)?\s*м(етр(ов|а|ы|е)?)?$/i, /^куб(ов|а|ы|е)?$/i]
    },
    cubic_kilometre: {
        r: '0.000000001',
        query: ['km3', 'km^3', 'cubickilometre', /^cub(ic)?\s*k(ilo(met(r(e(s)?)?)?)?)?$/i, 'километркуб', 'км3', 'км^3', /^килокубометр(ов|а|ы|е)?$/i, /^кубокилометр(ов|а|ы|е)?$/i, /^к(ило(метр(ов|а|ы|е)?)?)?\s*куб(ич(еск(их|ого|ий|ом)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом)?)?)?\s*к(ило(метр(ов|а|ы|е)?)?)?$/i]
    },
    cubic_decimetre: {
        r: '1000',
        query: ['dm3', 'dm^3', 'cubicdecimetre', /^cub(ic)?\s*d(eci(met(r(e(s)?)?)?)?)?$/i, 'дециметркуб', 'дм3', 'дм^3', /^децикубометр(ов|а|ы|е)?$/i, /^кубодециметр(ов|а|ы|е)?$/i, /^д(еци(метр(ов|а|ы|е)?)?)?\s*куб(ич(еск(их|ого|ий|ом)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом)?)?)?\s*д(еци(метр(ов|а|ы|е)?)?)?$/i]
    },
    cubic_centimetre: {
        r: '1000000',
        query: ['cm3', 'cm^3', 'cubiccentimetre', /^cub(ic)?\s*c(enti(met(r(e(s)?)?)?)?)?$/i, 'сантиметркуб', 'см3', 'см^3', /^сантикубометр(ов|а|ы|е)?$/i, /^кубосантиметр(ов|а|ы|е)?$/i, /^с(анти(метр(ов|а|ы|е)?)?)?\s*куб(ич(еск(их|ого|ий|ом)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом)?)?)?\s*с(анти(метр(ов|а|ы|е)?)?)?$/i]
    },
    cubic_millimetre: {
        r: '1000000000',
        query: ['mm3', 'mm^3', 'cubicmillimetre', /^cub(ic)?\s*mil(li(met(r(e(s)?)?)?)?)?$/i, 'миллиметркуб', 'мм3', 'мм^3', /^милликубометр(ов|а|ы|е)?$/i, /^кубомиллиметр(ов|а|ы|е)?$/i, /^мил(ли(метр(ов|а|ы|е)?)?)?\s*куб(ич(еск(их|ого|ий|ом)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом)?)?)?\s*мил(ли(метр(ов|а|ы|е)?)?)?$/i]
    },
    cubic_mile: {
        r: '0.0000000002399',
        query: ['mi3', 'mi^3', 'cubicmile', /^cub(ic)?\s*mi(l(e(s)?)?)?$/i, 'милякуб', 'миля3', 'миля^3', 'миликуб', 'мили3', 'мили^3', 'милькуб', 'миль3', 'миль^3', /^ми(л(ь|я|и|ю)?)?\s*куб(ич(еск(их|ого|ий|ом|ая)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом|ая)?)?)?\s*ми(л(ь|я|и|ю)?)?$/i]
    },
    cubic_yard: {
        r: '1.308',
        query: ['yd3', 'yd^3', 'cubicyard', /^cub(ic)?\s*ya(r(d(s)?)?)?$/i, 'ярдкуб', 'ярд3', 'ярд^3', 'ярдакуб', 'ярда3', 'ярда^3', 'ярдовкуб', 'ярдов3', 'ярдов^3', /^яр(д(ов|а|ы|е)?)?\s*куб(ич(еск(их|ого|ий|ом|ая)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом|ая)?)?)?\s*яр(д(ов|а|ы|е)?)?$/i]
    },
    cubic_feet: {
        r: '35.31',
        query: ['ft3', 'ft^3', 'cubicfeet', /^cub(ic)?\s*fe(e(t(s)?)?)?$/i, 'футкуб', 'фут3', 'фут^3', 'футакуб', 'фута3', 'фута^3', 'футовкуб', 'футов3', 'футов^3', /^фу(т(ов|а|ы|е)?)?\s*куб(ич(еск(их|ого|ий|ом|ая)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом|ая)?)?)?\s*фу(т(ов|а|ы|е)?)?$/i]
    },
    cubic_inch: {
        r: '61024',
        query: ['in3', 'in^3', 'cubicinch', /^cub(ic)?\s*in(c(h(es)?)?)?$/i, 'дюймкуб', 'дюйм3', 'дюйм^3', 'дюймакуб', 'дюйма3', 'дюйма^3', 'дюймовкуб', 'дюймов3', 'дюймов^3', /^дю(йм(ов|а|ы|е)?)?\s*куб(ич(еск(их|ого|ий|ом|ая)?)?)?$/i, /^куб(ич(еск(их|ого|ий|ом|ая)?)?)?\s*дю(йм(ов|а|ы|е)?)?$/i]
    },
    hectolitre: {
        r: '10',
        query: [/^hect(o(litre(s)?)?)?$/i, 'hclt', 'hl', /^гект(о(литр(ов|а|ы|е)?)?)?$/i, 'гл']
    },
    decalitre: {
        r: '100',
        query: [/^deca(litre(s)?)?$/i, 'decalt', 'decal', /^дек(а(литр(ов|а|ы|е)?)?)?$/i, 'декал']
    },
    litre: {
        r: '1000',
        query: [/^l(it((re|er)?(s)?)?)?$/i, 'lt', 'l', /^л(ит(р(ов|а|ы|е)?)?)?$/i, 'л']
    },
    decilitre: {
        r: '10000',
        query: [/^deci(litre(s)?)?$/i, 'dclt', 'dl', /^деци(литр(ов|а|ы|е)?)?$/i, 'дл']
    },
    centilitre: {
        r: '100000',
        query: [/^centi(litre(s)?)?$/i, 'clt', 'cl', /^санти(литр(ов|а|ы|е)?)?$/i, 'сл']
    },
    millilitre: {
        r: '1000000',
        query: [/^milli(litre(s)?)?$/i, 'mlt', 'ml', /^милли(литр(ов|а|ы|е)?)?$/i, 'мл']
    },
    microlitre: {
        r: '1000000000',
        query: [/^micro(litre(s)?)?$/i, 'mclt', 'mcl', /^микро(литр(ов|а|ы|е)?)?$/i, 'мкл']
    },
    gallon_usa: {
        r: '264.2',
        query: [/^gal(lon(s)?)?$/i, 'gals', 'gln', 'гал', /^гал(л(он(ов|а|ы|е)?)?)?$/i, 'гл']
    },
    pint_usa: {
        r: '2113',
        query: [/^pint(s)?$/i, 'pts', 'pt', /^пин(т(а|ы|е)?)?$/i, 'пт']
    },
    fluid_ounce_usa: {
        r: '33814',
        query: [/^fl(u(id)?)?\s*o(un(ce)?)?$/i, 'floz', 'fl oz', 'жиун', /^ж(ид(к(ая|их|ую|ой|)?)?)?\s*ун(ц(ии|ия|ий|ию)?)?$/i]
    },
    barrel_oil: {
        r: '6.29',
        query: [/^bar(r(el(s)?)?)?$/i, 'bars', 'brl', /^бар(р(ел(ей|и|ь|е|ю|еи)?)?)?$/i, 'бр', 'брл']
    }
}

module.exports = data;
