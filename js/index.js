// for (let i = 5; i >= 0; i--) {
//     for (let k = 0; k <= i; k++) {
//         document.write('*')
//     }
//     document.write('<br>') }


let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]
for (let item_1 of categories) {
    for (let item_2 of arr) {

        item_1.course = item_1.course.trim()
        item_1.course = item_1.course.toLowerCase()

        item_2.info.faculity = item_2.info.faculity.trim()
        item_2.info.faculity = item_2.info.faculity.toLowerCase()

        if (item_2.info.faculity === item_1.course) {
            item_1.count++
        }
    }
}
console.log(categories);