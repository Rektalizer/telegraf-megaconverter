const data = {
    nm_fs: {
        r: 1000000000 / 1000000000000000,
        query: ['nm/fs', 'нм/фс', 'нанометров в фемтосекунду', 'нм в фсек', 'нм в фс']
    },
    mcm_fs: {
        r: 1000000 / 1000000000000000,
        query: ['mcm/fs', 'мкм/фс', 'микрон в фемтосекунду', 'микрометров в фемтосекунду', 'мкм в фсек', 'мкм в фс']
    },
    mm_fs: {
        r: 1000 / 1000000000000000,
        query: ['mm/fs', 'мм/фс', 'миллиметров в фемтосекунду', 'мм в фсек', 'мм в фс']
    },
    cm_fs: {
        r: 100 / 1000000000000000,
        query: ['cm/fs', 'см/фс', 'сантиметров в фемтосекунду', 'см в фсек', 'см в фс']
    },
    dm_fs: {
        r: 10 / 1000000000000000,
        query: ['dm/fs', 'дм/фс', 'дециметров в фемтосекунду', 'дм в фсек', 'дм в фс']
    },
    m_fs: {
        r: 1 / 1000000000000000,
        query: ['m/fs', 'м/фс', 'метров в фемтосекунду', 'м в фсек', 'м в фс']
    },
    km_fs: {
        r: (1 / 1000) / 1000000000000000,
        query: ['km/fs', 'км/фс', 'километров в фемтосекунду', 'км в фсек', 'км в фс']
    },
    mi_fs: {
        r: (1 / 1609) / 1000000000000000,
        query: ['mpfs', 'miles/fs', 'миль/фс', 'миль в фемтосекунду', 'миль в фсек', 'миль в фс']
    },
    yd_fs: {
        r: 1.094 / 1000000000000000,
        query: ['ypfs', 'yards/fs', 'ярд/фс', 'ярд в фемтосекунду', 'ярдов в фемтосекунду', 'ярд в фсек', 'ярд в фс', 'ярдов в фсек', 'ярдов в фс']
    },
    ft_fs: {
        r: 3.281 / 1000000000000000,
        query: ['fpfs', 'feet/fs', 'фут/фс', 'фут в фемтосекунду', 'футов в фемтосекунду', 'фут в фсек', 'фут в фс', 'футов в фсек', 'футов в фс']
    },
    in_fs: {
        r: 39.37 / 1000000000000000,
        query: ['inpfs', 'inches/fs', 'дюйм/фс', 'дюйм в фемтосекунду', 'дюймов в фемтосекунду', 'дюйм в фсек', 'дюйм в фс', 'дюймов в фсек', 'дюймов в фс']
    },
    nm_ps: {
        r: 1000000000 / 1000000000000,
        query: ['nm/ps', 'нм/пс', 'нанометров в пикосекунду', 'нм в псек', 'нм в пс']
    },
    mcm_ps: {
        r: 1000000 / 1000000000000,
        query: ['mcm/ps', 'мкм/пс', 'микрон в пикосекунду', 'микрометров в пикосекунду', 'мкм в псек', 'мкм в пс']
    },
    mm_ps: {
        r: 1000 / 1000000000000,
        query: ['mm/ps', 'мм/пс', 'миллиметров в пикосекунду', 'мм в псек', 'мм в пс']
    },
    cm_ps: {
        r: 100 / 1000000000000,
        query: ['cm/ps', 'см/пс', 'сантиметров в пикосекунду', 'см в псек', 'см в пс']
    },
    dm_ps: {
        r: 10 / 1000000000000,
        query: ['dm/ps', 'дм/пс', 'дециметров в пикосекунду', 'дм в псек', 'дм в пс']
    },
    m_ps: {
        r: 1 / 1000000000000,
        query: ['m/ps', 'м/пс', 'метров в пикосекунду', 'м в псек', 'м в пс']
    },
    km_ps: {
        r: (1 / 1000) / 1000000000000,
        query: ['km/ps', 'км/пс', 'километров в пикосекунду', 'км в псек', 'км в пс']
    },
    mi_ps: {
        r: (1 / 1609) / 1000000000000,
        query: ['mpps', 'miles/ps', 'миль/пс', 'миль в пикосекунду', 'миль в псек', 'миль в пс']
    },
    yd_ps: {
        r: 1.094 / 1000000000000,
        query: ['ypps', 'yards/ps', 'ярд/пс', 'ярд в пикосекунду', 'ярдов в пикосекунду', 'ярд в псек', 'ярд в пс', 'ярдов в псек', 'ярдов в пс']
    },
    ft_ps: {
        r: 3.281 / 1000000000000,
        query: ['fpps', 'feet/ps', 'фут/пс', 'фут в пикосекунду', 'футов в пикосекунду', 'фут в псек', 'фут в пс', 'футов в псек', 'футов в пс']
    },
    in_ps: {
        r: 39.37 / 1000000000000,
        query: ['inpps', 'inches/ps', 'дюйм/пс', 'дюйм в пикосекунду', 'дюймов в пикосекунду', 'дюйм в псек', 'дюйм в пс', 'дюймов в псек', 'дюймов в пс']
    },
    nm_ns: {
        r: 1000000000 / 1000000000,
        query: ['nm/ns', 'нм/нс', 'нанометров в наносекунду', 'нм в нсек', 'нм в нс']
    },
    mcm_ns: {
        r: 1000000 / 1000000000,
        query: ['mcm/ns', 'мкм/нс', 'микрон в наносекунду', 'микрометров в наносекунду', 'мкм в нсек', 'мкм в нс']
    },
    mm_ns: {
        r: 1000 / 1000000000,
        query: ['mm/ns', 'мм/нс', 'миллиметров в наносекунду', 'мм в нсек', 'мм в нс']
    },
    cm_ns: {
        r: 100 / 1000000000,
        query: ['cm/ns', 'см/нс', 'сантиметров в наносекунду', 'см в нсек', 'см в нс']
    },
    dm_ns: {
        r: 10 / 1000000000,
        query: ['dm/ns', 'дм/нс', 'дециметров в наносекунду', 'дм в нсек', 'дм в нс']
    },
    m_ns: {
        r: 1 / 1000000000,
        query: ['m/ns', 'м/нс', 'метров в наносекунду', 'м в нсек', 'м в нс']
    },
    km_ns: {
        r: (1 / 1000) / 1000000000,
        query: ['km/ns', 'км/нс', 'километров в наносекунду', 'км в нсек', 'км в нс']
    },
    mi_ns: {
        r: (1 / 1609) / 1000000000,
        query: ['mpns', 'miles/ns', 'миль/нс', 'миль в наносекунду', 'миль в нсек', 'миль в нс']
    },
    yd_ns: {
        r: 1.094 / 1000000000,
        query: ['ypns', 'yards/ns', 'ярд/нс', 'ярд в наносекунду', 'ярдов в наносекунду', 'ярд в нсек', 'ярд в нс', 'ярдов в нсек', 'ярдов в нс']
    },
    ft_ns: {
        r: 3.281 / 1000000000,
        query: ['fpns', 'feet/ns', 'фут/нс', 'фут в наносекунду', 'футов в наносекунду', 'фут в нсек', 'фут в нс', 'футов в нсек', 'футов в нс']
    },
    in_ns: {
        r: 39.37 / 1000000000,
        query: ['inpns', 'inches/ns', 'дюйм/нс', 'дюйм в наносекунду', 'дюймов в наносекунду', 'дюйм в нсек', 'дюйм в нс', 'дюймов в нсек', 'дюймов в нс']
    },
    nm_micros: {
        r: 1000000000 / 1000000,
        query: ['nm/micros', 'nm/mcs', 'нм/микрос', 'нанометров в микросекунду', 'нм в микросек', 'нм в мкс']
    },
    mcm_micros: {
        r: 1000000 / 1000000,
        query: ['mcm/micros', 'mcm/mcs', 'мкм/микрос', 'микрон в микросекунду', 'микрометров в микросекунду', 'мкм в микросек', 'мкм в мкс']
    },
    mm_micros: {
        r: 1000 / 1000000,
        query: ['mm/micros', 'mcm/mcs', 'мм/микрос', 'миллиметров в микросекунду', 'мм в микросек', 'мм в мкс']
    },
    cm_micros: {
        r: 100 / 1000000,
        query: ['cm/micros', 'cm/mcs', 'см/микрос', 'сантиметров в микросекунду', 'см в микросек', 'см в мкс']
    },
    dm_micros: {
        r: 10 / 1000000,
        query: ['dm/micros', 'dm/mcs', 'дм/микрос', 'дециметров в микросекунду', 'дм в микросек', 'дм в мкс']
    },
    m_micros: {
        r: 1 / 1000000,
        query: ['m/micros', 'm/mcs', 'м/микрос', 'метров в микросекунду', 'м в микросек', 'м в мкс']
    },
    km_micros: {
        r: (1 / 1000) / 1000000,
        query: ['km/micros', 'km/mcs', 'км/мкс', 'километров в микросекунду', 'км в микросек', 'км в мкс']
    },
    mi_micros: {
        r: (1 / 1609) / 1000000,
        query: ['mpmicros', 'miles/micros', 'miles/mcs', 'миль/мкс', 'миль в микросекунду', 'миль в микросек', 'миль в мкс']
    },
    yd_micros: {
        r: 1.094 / 1000000,
        query: ['ypmicros', 'yards/micros', 'yards/mcs', 'ярд/мкс', 'ярд в микросекунду', 'ярдов в микросекунду', 'ярд в микросек', 'ярд в мкс', 'ярдов в микросек', 'ярдов в мкс']
    },
    ft_micros: {
        r: 3.281 / 1000000,
        query: ['fpmicros', 'feet/micros', 'yards/mcs', 'фут/мкс', 'фут в микросекунду', 'футов в микросекунду', 'фут в микросек', 'фут в мкс', 'футов в микросек', 'футов в мкс']
    },
    in_micros: {
        r: 39.37 / 1000000,
        query: ['inpmicros', 'inches/micros', 'inches/mcs', 'дюйм/мкс', 'дюйм в микросекунду', 'дюймов в микросекунду', 'дюйм в микросек', 'дюйм в мкс', 'дюймов в микросек', 'дюймов в мкс']
    },
    nm_ms: {
        r: 1000000000 / 1000,
        query: ['nm/ms', 'нм/мс', 'нанометров в миллисекунду', 'нм в мсек', 'нм в мс']
    },
    mcm_ms: {
        r: 1000000 / 1000,
        query: ['mcm/ms', 'мкм/мс', 'микрон в миллисекунду', 'микрометров в миллисекунду', 'мкм в мсек', 'мкм в мс']
    },
    mm_ms: {
        r: 1000 / 1000,
        query: ['mm/ms', 'мм/мс', 'миллиметров в миллисекунду', 'мм в мсек', 'мм в мс']
    },
    cm_ms: {
        r: 100 / 1000,
        query: ['cm/ms', 'см/мс', 'сантиметров в миллисекунду', 'см в мсек', 'см в мс']
    },
    dm_ms: {
        r: 10 / 1000,
        query: ['dm/ms', 'дм/мс', 'дециметров в миллисекунду', 'дм в мсек', 'дм в мс']
    },
    m_ms: {
        r: 1 / 1000,
        query: ['m/ms', 'м/мс', 'метров в миллисекунду', 'м в мсек', 'м в мс']
    },
    km_ms: {
        r: (1 / 1000) / 1000,
        query: ['km/ms', 'км/мс', 'километров в миллисекунду', 'км в мсек', 'км в мс']
    },
    mi_ms: {
        r: (1 / 1609) / 1000,
        query: ['mpms', 'miles/ms', 'миль/мс', 'миль в миллисекунду', 'миль в мсек', 'миль в мс']
    },
    yd_ms: {
        r: 1.094 / 1000,
        query: ['ypms', 'yards/ms', 'ярд/мс', 'ярд в миллисекунду', 'ярдов в миллисекунду', 'ярд в мсек', 'ярд в мс', 'ярдов в мсек', 'ярдов в мс']
    },
    ft_ms: {
        r: 3.281 / 1000,
        query: ['fpms', 'feet/ms', 'фут/мс', 'фут в миллисекунду', 'футов в миллисекунду', 'фут в мсек', 'фут в мс', 'футов в мсек', 'футов в мс']
    },
    in_ms: {
        r: 39.37 / 1000,
        query: ['inpms', 'inches/ms', 'дюйм/мс', 'дюйм в миллисекунду', 'дюймов в миллисекунду', 'дюйм в мсек', 'дюйм в мс', 'дюймов в мсек', 'дюймов в мс']
    },
    nm_s: {
        r: 1000000000 / 1,
        query: ['nm/s', 'nm/sec', 'nms', 'nmsec', 'нм/с', 'нм/сек', 'нанометров в секунду', 'нм в сек', 'нм в с', 'нмс']
    },
    mcm_s: {
        r: 1000000 / 1,
        query: ['mcm/s', 'mcm/sec', 'mcms', 'mcmsec', 'мкм/с', 'мкм/сек', 'микрон в секунду', 'микрометров в секунду', 'мкм в сек', 'мкм в с', 'мкмс']
    },
    mm_s: {
        r: 1000 / 1,
        query: ['mm/s', 'mm/sec', 'mms', 'mmsec', 'мм/с', 'мм/сек', 'миллиметров в секунду', 'мм в сек', 'мм в с', 'ммс']
    },
    cm_s: {
        r: 100 / 1,
        query: ['cm/s', 'cm/sec', 'cms', 'cmsec', 'см/с', 'см/сек', 'сантиметров в секунду', 'см в сек', 'см в с', 'смс']
    },
    dm_s: {
        r: 10 / 1,
        query: ['dm/s', 'dm/sec', 'dms', 'dmsec', 'дм/с', 'дм/сек', 'дециметров в секунду', 'дм в сек', 'дм в с', 'дмс']
    },
    m_s: {
        r: 1 / 1,
        query: ['m/s', 'm/sec', 'ms', 'msec', 'м/с', 'м/сек', 'метров в секунду', 'м в сек', 'м в с', 'мс']
    },
    km_s: {
        r: (1 / 1000) / 1,
        query: ['km/s', 'km/sec', 'kms', 'kmsec', 'км/с', 'км/сек', 'километров в секунду', 'км в сек', 'км в с', 'кмс']
    },
    mi_s: {
        r: (1 / 1609) / 1,
        query: ['mps', 'mi/sec', 'miles/s', 'msec', 'misec', 'miless', 'миль/с', 'миль/сек', 'миль в секунду', 'миль в сек', 'миль в с', 'мильс']
    },
    yd_s: {
        r: 1.094 / 1,
        query: ['yps', 'yards/sec', 'yards/s', 'yardssec', 'yardss', 'ярд/с', 'ярд/сек', 'ярд в секунду', 'ярдов в секунду', 'ярд в сек', 'ярд в с', 'ярдов в сек', 'ярдов в с', 'ярдс']
    },
    ft_s: {
        r: 3.281 / 1,
        query: ['fps', 'feet/sec', 'feet/s', 'feetsec', 'feets', 'фут/с', 'фут/сек', 'фут в секунду', 'футов в секунду', 'фут в сек', 'фут в с', 'футов в сек', 'футов в с', 'футс']
    },
    in_s: {
        r: 39.37 / 1,
        query: ['inps', 'inches/sec', 'inches/s', 'inchessec', 'inchess', 'дюйм/с', 'дюйм/сек', 'дюйм в секунду', 'дюймов в секунду', 'дюйм в сек', 'дюйм в с', 'дюймов в сек', 'дюймов в с', 'дюймс']
    },
    nm_min: {
        r: 1000000000 / (1 / 60),
        query: ['nm/min', 'nm/m', 'nmmin', 'nmm', 'нм/мин', 'нм/минут', 'нанометров в минуту', 'нм в мин', 'нм в минуту', 'нммин']
    },
    mcm_min: {
        r: 1000000 / (1 / 60),
        query: ['mcm/min', 'mcm/m', 'mcmmin', 'mcmm', 'мкм/мин', 'мкм/минут', 'микрон в минуту', 'микрометров в минуту', 'мкм в мин', 'мкм в минуту', 'мкммин']
    },
    mm_min: {
        r: 1000 / (1 / 60),
        query: ['mm/min', 'mm/m', 'mmmin', 'mmm', 'мм/мин', 'мм/минут', 'миллиметров в минуту', 'мм в мин', 'мм в минуту', 'мммин']
    },
    cm_min: {
        r: 100 / (1 / 60),
        query: ['cm/min', 'cm/m', 'cmmin', 'cmm', 'см/мин', 'см/минут', 'сантиметров в минуту', 'см в мин', 'см в минуту', 'сммин']
    },
    dm_min: {
        r: 10 / (1 / 60),
        query: ['dm/min', 'dm/m', 'dmmin', 'dmm', 'дм/мин', 'дм/минут', 'дециметров в минуту', 'дм в мин', 'дм в минуту', 'дммин']
    },
    m_min: {
        r: 1 / (1 / 60),
        query: ['m/min', 'm/m', 'mmin', 'mm', 'м/мин', 'м/минут', 'метров в минуту', 'м в мин', 'м в минуту', 'ммин']
    },
    km_min: {
        r: (1 / 1000) / (1 / 60),
        query: ['km/min', 'km/m', 'kmmin', 'kmm', 'км/мин', 'км/минут', 'километров в минуту', 'км в мин', 'км в минуту', 'кммин']
    },
    mi_min: {
        r: (1 / 1609) / (1 / 60),
        query: ['mpmin', 'mi/m', 'mim', 'mpm', 'miles/min', 'milesmin', 'миль/мин', 'миль/минут', 'миль в минуту', 'миль в мин', 'миль в минуту', 'мимин']
    },
    yd_min: {
        r: 1.094 / (1 / 60),
        query: ['ypmin', 'yd/m', 'ydm', 'ypm', 'yards/min', 'yardsmin', 'ярд/мин', 'ярд/минут', 'ярд в минуту', 'ярдов в минуту', 'ярд в мин', 'ярд в минут', 'ярдов в минут', 'ярдов в мин', 'ярдмин']
    },
    ft_min: {
        r: 3.281 / (1 / 60),
        query: ['fpmin', 'ft/m', 'ftm', 'fpm', 'feet/min', 'feetmin', 'фут/мин', 'фут/минут', 'фут в минуту', 'футов в минуту', 'фут в мин', 'фут в минут', 'футов в мин', 'футов в минут', 'футмин']
    },
    in_min: {
        r: 39.37 / (1 / 60),
        query: ['inps', 'in/m', 'inches/s', 'inm', 'inchess', 'дюйм/с', 'дюйм/сек', 'дюйм в секунду', 'дюймов в секунду', 'дюйм в сек', 'дюйм в с', 'дюймов в сек', 'дюймов в с', 'дюйммин']
    },
    nm_hour: {
        r: 1000000000 / (60 * 60),
        query: ['nm/hour', 'nm/h', 'nmhour', 'nmh', 'нм/ч', 'нм/час', 'нанометров в час', 'нм в час', 'нм в ч', 'нмчас']
    },
    mcm_hour: {
        r: 1000000 / (60 * 60),
        query: ['mcm/hour', 'mcm/h', 'mcmhour', 'mcmh', 'мкм/ч', 'мкм/час', 'микрон в час', 'микрометров в час', 'мкм в ч', 'мкм в час', 'мкмчас']
    },
    mm_hour: {
        r: 1000 / (60 * 60),
        query: ['mm/hour', 'mm/h', 'mmhour', 'mmh', 'мм/ч', 'мм/час', 'миллиметров в час', 'мм в час', 'мм в ч', 'ммчас']
    },
    cm_hour: {
        r: 100 / (60 * 60),
        query: ['cm/hour', 'cm/h', 'cmhour', 'cmh', 'см/ч', 'см/час', 'сантиметров в час', 'см в час', 'см в ч', 'смчас']
    },
    dm_hour: {
        r: 10 / (60 * 60),
        query: ['dm/hour', 'dm/h', 'dmhour', 'dmh', 'дм/ч', 'дм/час', 'дециметров в час', 'дм в час', 'дм в ч', 'дмчас']
    },
    m_hour: {
        r: 1 / (60 * 60),
        query: ['m/hour', 'm/h', 'mhour', 'mh', 'м/ч', 'м/час', 'метров в час', 'м в час', 'м в ч', 'мчас']
    },
    km_hour: {
        r: (1 / 1000) / (60 * 60),
        query: ['km/hour', 'km/h', 'kmhour', 'kmh', 'км/час', 'км/ч', 'километров в час', 'км в час', 'км в ч', 'кмчас']
    },
    mi_hour: {
        r: (1 / 1609) / (60 * 60),
        query: ['mphour', 'mi/h', 'mih', 'mph', 'miles/h', 'milesh', 'миль/час', 'миль/ч', 'миль в час', 'миль в ч', 'мичас']
    },
    yd_hour: {
        r: 1.094 / (60 * 60),
        query: ['yph', 'yphour', 'yd/h', 'yards/h', 'ydh', 'yardsh', 'ярд/час', 'ярд/ч', 'ярд в час', 'ярдов в час', 'ярд в ч', 'ярдов в ч', 'ярдчас']
    },
    ft_hour: {
        r: 3.281 / (60 * 60),
        query: ['fph', 'fphour', 'ft/h', 'feet/h', 'fth', 'feeth', 'фут/час', 'фут/ч', 'фут в час', 'футов в час', 'фут в ч', 'футов в ч', 'футчас']
    },
    in_hour: {
        r: 39.37 / (60 * 60),
        query: ['inph', 'inches/h', 'in/h', 'inchesh', 'inh', 'дюйм/ч', 'дюйм/час', 'дюйм в час', 'дюймов в час', 'дюйм в ч', 'дюймов в ч', 'дюймчас']
    },
    nm_day: {
        r: 1000000000 / (86400),
        query: ['nm/day', 'nm/d', 'nmday', 'nmd', 'нм/д', 'нм/день', 'нанометров в день', 'нм в день', 'нм в д', 'нмд']
    },
    mcm_day: {
        r: 1000000 / (86400),
        query: ['mcm/day', 'mcm/d', 'mcmday', 'mcmd', 'мкм/д', 'мкм/день', 'микрон в день', 'микрометров в день', 'мкм в д', 'мкм в день', 'мкмд']
    },
    mm_day: {
        r: 1000 / (86400),
        query: ['mm/day', 'mm/d', 'mmday', 'mmd', 'мм/д', 'мм/день', 'миллиметров в день', 'мм в день', 'мм в д', 'ммд']
    },
    cm_day: {
        r: 100 / (86400),
        query: ['cm/day', 'cm/d', 'cmday', 'cmd', 'см/д', 'см/день', 'сантиметров в день', 'см в день', 'см в д', 'смд']
    },
    dm_day: {
        r: 10 / (86400),
        query: ['dm/day', 'dm/d', 'dmday', 'dmd', 'дм/д', 'дм/день', 'дециметров в день', 'дм в день', 'дм в д', 'дмд']
    },
    m_day: {
        r: 1 / (86400),
        query: ['m/day', 'm/d', 'mday', 'md', 'м/д', 'м/день', 'метров в день', 'м в день', 'м в д', 'мд']
    },
    km_day: {
        r: (1 / 1000) / (86400),
        query: ['km/day', 'km/d', 'kmday', 'kmd', 'км/д', 'км/день', 'километров в день', 'км в день', 'км в д', 'кмд']
    },
    mi_day: {
        r: (1 / 1609) / (86400),
        query: ['mpday', 'mi/d', 'mid', 'mpd', 'miles/d', 'milesd', 'миль/день', 'миль/д', 'миль в день', 'миль в д', 'мид']
    },
    yd_day: {
        r: 1.094 / (86400),
        query: ['ypd', 'ypday', 'yd/d', 'yards/d', 'ydd', 'yardsd', 'ярд/день', 'ярд/д', 'ярд в день', 'ярдов в день', 'ярд в д', 'ярдов в д', 'ярдд']
    },
    ft_day: {
        r: 3.281 / (86400),
        query: ['fpd', 'fpday', 'ft/d', 'feet/d', 'ftd', 'feetd', 'фут/день', 'фут/д', 'фут в день', 'футов в день', 'фут в д', 'футов в д', 'футд']
    },
    in_day: {
        r: 39.37 / (86400),
        query: ['inpd', 'inches/d', 'in/d', 'inchesd', 'ind', 'дюйм/д', 'дюйм/день', 'дюйм в день', 'дюймов в день', 'дюйм в д', 'дюймов в д', 'дюймд']
    },
    nm_week: {
        r: 1000000000 / (7 * 24 * 60 * 60),
        query: ['nm/w', 'nm/week', 'nmw', 'nmweek', 'nmw', 'нм/н', 'нм/недель', 'нм/неделю', 'нанометров в неделю', 'нм в неделю', 'нм в н', 'нмнед']
    },
    mcm_week: {
        r: 1000000 / (7 * 24 * 60 * 60),
        query: ['mcm/w', 'mcm/week', 'mcmw', 'mcmweek', 'мкм/н', 'мкм/недель', 'мкм/неделю', 'микрон в неделю', 'микрометров в неделю', 'мкм в н', 'мкм в неделю', 'мкмнед']
    },
    mm_week: {
        r: 1000 / (7 * 24 * 60 * 60),
        query: ['mm/w', 'mm/week', 'mmw', 'mmweek', 'мм/н', 'мм/недель', 'мм/неделю', 'миллиметров в неделю', 'мм в неделю', 'мм в н', 'ммнед']
    },
    cm_week: {
        r: 100 / (7 * 24 * 60 * 60),
        query: ['cm/w', 'cm/week', 'cmw', 'cmweek', 'см/н', 'см/недель', 'см/неделю', 'сантиметров в неделю', 'см в неделю', 'см в н', 'смнед']
    },
    dm_week: {
        r: 10 / (7 * 24 * 60 * 60),
        query: ['dm/w', 'dm/week', 'dmw', 'dmweek', 'дм/н', 'дм/недель', 'дм/неделю', 'дециметров в неделю', 'дм в неделю', 'дм в н', 'дмнед']
    },
    m_week: {
        r: 1 / (7 * 24 * 60 * 60),
        query: ['m/w', 'm/week', 'mw', 'mweek', 'м/н', 'м/недель', 'м/неделю', 'метров в неделю', 'м в неделю', 'м в н', 'мнед']
    },
    km_week: {
        r: (1 / 1000) / (7 * 24 * 60 * 60),
        query: ['km/w', 'km/week', 'kmw', 'kmweek', 'км/н', 'км/недель', 'км/неделю', 'километров в неделю', 'км в неделю', 'км в н', 'кмнед']
    },
    mi_week: {
        r: (1 / 1609) / (7 * 24 * 60 * 60),
        query: ['mpw', 'mpweek', 'mi/w', 'miles/w', 'miw', 'milesw', 'миль/недель', 'миль/неделю', 'миль/н', 'миль в неделю', 'миль в н', 'минед']
    },
    yd_week: {
        r: 1.094 / (7 * 24 * 60 * 60),
        query: ['ypw', 'ypweek', 'yards/w', 'yd/w', 'yardsw', 'ydw', 'ярд/недель', 'ярд/неделю', 'ярд/н', 'ярд в неделю', 'ярдов в неделю', 'ярд в н', 'ярдов в н', 'ярднед']
    },
    ft_week: {
        r: 3.281 / (7 * 24 * 60 * 60),
        query: ['fpw', 'fpweek', 'feet/w', 'ft/w', 'feetw', 'ftw', 'фут/недель', 'фут/неделю', 'фут/н', 'фут в неделю', 'футов в неделю', 'фут в н', 'футов в н', 'футнед']
    },
    in_week: {
        r: 39.37 / (7 * 24 * 60 * 60),
        query: ['inpw', 'inpweek', 'inches/w', 'in/w', 'inchesw', 'inw', 'дюйм/недель', 'дюйм/неделю', 'дюйм/н', 'дюйм в неделю', 'дюймов в неделю', 'дюйм в н', 'дюймов в н', 'дюймнед']
    },
    nm_month: {
        r: 1000000000 / (43800 * 60),
        query: ['nm/mon', 'nm/month', 'nmmon', 'nmmonth', 'нм/мес', 'нм/месяц', 'нанометров в месяц', 'нм в месяц', 'нм в мес', 'нммес']
    },
    mcm_month: {
        r: 1000000 / (43800 * 60),
        query: ['mcm/mon', 'mcm/month', 'mcmmon', 'mcmmonth', 'мкм/мес', 'мкм/месяц', 'микрон в месяц', 'микрометров в месяц', 'мкм в месяц', 'мкм в мес', 'мкммес']
    },
    mm_month: {
        r: 1000 / (43800 * 60),
        query: ['mm/mon', 'mm/month', 'mmmon', 'mmmonth', 'мм/мес', 'мм/месяц', 'миллиметров в месяц', 'мм в месяц', 'мм в мес', 'мммес']
    },
    cm_month: {
        r: 100 / (43800 * 60),
        query: ['cm/mon', 'cm/month', 'cmmon', 'cmmonth', 'см/мес', 'см/месяц', 'сантиметров в месяц', 'см в месяц', 'см в мес', 'сммес']
    },
    dm_month: {
        r: 10 / (43800 * 60),
        query: ['dm/mon', 'dm/month', 'dmmon', 'dmmonth', 'дм/мес', 'дм/месяц', 'дециметров в месяц', 'дм в месяц', 'дм в мес', 'дммес']
    },
    m_month: {
        r: 1 / (43800 * 60),
        query: ['m/mon', 'm/month', 'mmon', 'mmonth', 'м/мес', 'м/месяц', 'метров в месяц', 'м в месяц', 'м в мес', 'ммес']
    },
    km_month: {
        r: (1 / 1000) / (43800 * 60),
        query: ['km/mon', 'km/month', 'kmmon', 'kmmonth', 'км/мес', 'км/месяц', 'километров в месяц', 'км в месяц', 'км в мес', 'кммес']
    },
    mi_month: {
        r: (1 / 1609) / (43800 * 60),
        query: ['mpmon', 'mpmonth', 'miles/month', 'mil/month', 'milesmonth', 'milmonth', 'миль/месяц', 'миль/мес', 'миль в месяц', 'миль в мес', 'мимес']
    },
    yd_month: {
        r: 1.094 / (43800 * 60),
        query: ['ypmon', 'ypmonth', 'yards/month', 'yd/month', 'yardsmonth', 'ydmonth', 'ярд/месяц', 'ярд/мес', 'ярд в месяц', 'ярдов в месяц', 'ярд в мес', 'ярдов в мес', 'ярдмес']
    },
    ft_month: {
        r: 3.281 / (43800 * 60),
        query: ['fpmon', 'fpmonth', 'feet/month', 'ft/month', 'feetmonth', 'ftmonth', 'фут/месяц', 'фут/мес', 'фут в месяц', 'футов в месяц', 'фут в мес', 'футов в мес', 'футмес']
    },
    in_month: {
        r: 39.37 / (43800 * 60),
        query: ['inpmon', 'inpmonth', 'inches/month', 'in/month', 'inchesmonth', 'inmonth', 'дюйм/месяц', 'дюйм/мес', 'дюйм в месяц', 'дюймов в месяц', 'дюйм в мес', 'дюймов в мес', 'дюйммес']
    },
    nm_year: {
        r: 1000000000 / 0.00000003169,
        query: ['nm/y', 'nm/year', 'nmy', 'nmyear', 'нм/г', 'нм/год', 'нанометров в год', 'нм в год', 'нм в г', 'нмгод']
    },
    mcm_year: {
        r: 1000000 / 0.00000003169,
        query: ['mcm/y', 'mcm/year', 'mcmy', 'mcmyear', 'мкм/г', 'мкм/год', 'микрон в год', 'микрометров в год', 'мкм в год', 'мкм в г', 'мкмгод']
    },
    mm_year: {
        r: 1000 / 0.00000003169,
        query: ['mm/y', 'mm/year', 'mmy', 'mmyear', 'мм/г', 'мм/год', 'миллиметров в год', 'мм в г', 'мм в год', 'ммгод']
    },
    cm_year: {
        r: 100 / 0.00000003169,
        query: ['cm/y', 'cm/year', 'cmy', 'cmyear', 'см/г', 'см/год', 'сантиметров в год', 'см в г', 'см в год', 'смгод']
    },
    dm_year: {
        r: 10 / 0.00000003169,
        query: ['dm/y', 'dm/year', 'dmy', 'dmyear', 'дм/г', 'дм/год', 'дециметров в год', 'дм в г', 'дм в год', 'дмгод']
    },
    m_year: {
        r: 1 / 0.00000003169,
        query: ['m/y', 'm/year', 'my', 'myear', 'м/г', 'м/год', 'метров в год', 'м в г', 'м в год', 'мгод']
    },
    km_year: {
        r: (1 / 1000) / 0.00000003169,
        query: ['km/y', 'km/year', 'kmy', 'kmyear', 'км/г', 'км/год', 'километров в год', 'км в г', 'км в год', 'кмгод']
    },
    mi_year: {
        r: (1 / 1609) / 0.00000003169,
        query: ['mpy', 'mpyear', 'miles/year', 'mil/year', 'milesyear', 'milyear', 'миль/г', 'миль/год', 'миль в г', 'миль в год', 'мигод']
    },
    yd_year: {
        r: 1.094 / 0.00000003169,
        query: ['ypy', 'ypyear', 'yards/year', 'yd/year', 'yardsyear', 'ydyear', 'ярд/г', 'ярд/год', 'ярд в г', 'ярдов в г', 'ярд в год', 'ярдов в год', 'ярдгод']
    },
    ft_year: {
        r: 3.281 / 0.00000003169,
        query: ['fpy', 'fpyear', 'feet/year', 'ft/year', 'feetyear', 'ftyear', 'фут/г', 'фут/год', 'фут в г', 'футов в г', 'фут в год', 'футов в год', 'футгод']
    },
    in_year: {
        r: 39.37 / 0.00000003169,
        query: ['inpy', 'inpyear', 'inches/year', 'in/year', 'inchesyear', 'inyear', 'дюйм/г', 'дюйм/год', 'дюйм в г', 'дюймов в г', 'дюйм в год', 'дюймов в год', 'дюймгод']
    },
    nm_century: {
        r: 1000000000 / 0.0000000003169,
        query: ['nm/cen', 'nm/century', 'nmcen', 'nmcentury', 'нм/в', 'нм/век', 'нанометров в век', 'нм в век', 'нм в в', 'нмвек']
    },
    mcm_century: {
        r: 1000000 / 0.0000000003169,
        query: ['mcm/cen', 'mcm/century', 'mcmcen', 'mcmcentury', 'мкм/в', 'мкм/век', 'микрон в век', 'микрометров в век', 'мкм в век', 'мкм в в', 'мкмвек']
    },
    mm_century: {
        r: 1000 / 0.0000000003169,
        query: ['mm/cen', 'mm/century', 'mmcen', 'mmcentury', 'мм/в', 'мм/век', 'миллиметров в век', 'мм в век', 'мм в в', 'ммвек']
    },
    cm_century: {
        r: 100 / 0.0000000003169,
        query: ['cm/cen', 'cm/century', 'cmcen', 'cmcentury', 'см/в', 'см/век', 'сантиметров в век', 'см в век', 'см в в', 'смвек']
    },
    dm_century: {
        r: 10 / 0.0000000003169,
        query: ['dm/cen', 'dm/century', 'dmcen', 'dmcentury', 'дм/в', 'дм/век', 'дециметров в век', 'дм в век', 'дм в в', 'дмвек']
    },
    m_century: {
        r: 1 / 0.0000000003169,
        query: ['m/cen', 'm/century', 'mcen', 'mcentury', 'м/в', 'м/век', 'метров в век', 'м в век', 'м в в', 'мвек']
    },
    km_century: {
        r: (1 / 1000) / 0.0000000003169,
        query: ['km/cen', 'km/century', 'kmcen', 'kmcentury', 'км/в', 'км/век', 'километров в век', 'км в век', 'км в в', 'кмвек']
    },
    mi_century: {
        r: (1 / 1609) / 0.0000000003169,
        query: ['mpcen', 'mpcentury', 'miles/cen', 'mil/cen', 'miles/century', 'milescen', 'milcen', 'milescentury', 'milcentury', 'миль/в', 'миль/век', 'миль в в', 'миль в век', 'мивек']
    },
    yd_century: {
        r: 1.094 / 0.0000000003169,
        query: ['ypcen', 'ypcentury', 'yards/cen', 'yards/century', 'yd/cen', 'yd/century', 'yardscen', 'yardscentury', 'ydcen', 'ydcentury', 'ярд/в', 'ярд/век', 'ярд в в', 'ярдов в в', 'ярд в век', 'ярдов в век', 'ярдвек']
    },
    ft_century: {
        r: 3.281 / 0.0000000003169,
        query: ['fpcen', 'fpcentury', 'feet/cen', 'feet/century', 'ft/cen', 'ft/century', 'feetcen', 'feetcentury', 'ftcen', 'ftcentury', 'фут/в', 'фут/век', 'фут в в', 'футов в в', 'фут в век', 'футов в век', 'футвек']
    },
    in_century: {
        r: 39.37 / 0.0000000003169,
        query: ['inpcen', 'inpcentury', 'inches/cen', 'inches/century', 'in/cen', 'in/century', 'inchescen', 'inchescentury', 'incen', 'incentury', 'дюйм/в', 'дюйм/век', 'дюйм в в', 'дюймов в в', 'дюйм в век', 'дюймов в век', 'дюймвек']
    }
}

module.exports = data;
