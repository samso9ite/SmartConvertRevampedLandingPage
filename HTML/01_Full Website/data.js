
// var app = new Vue({ 
//     el: '#app',
//     data: {
//         testimonials: [],
//         testimony: {}
//     },

//     methods: {
//        async  getTestimony(){
//             const res = await fetch('https://api.smartconvert.ng/api/v1/list-testimonials')
//             let data = await res.text()
//             let parsedData = JSON.parse(data)
//             let testimonials = []
//             parsedData.map(item => {
//                 if(item.status == true ){
//                   testimonials.push(item)  
//                 }
//             })
//             this.testimony = testimonials[0]
//         },
//     },
//     mounted() {
//         this.getTestimony()
//     },
// });

var testimonial = new Vue({ 
    el: '#testimonial',
    data: {
        testimonials: [],
    },

    methods: {
       async  getTestimonials(){
            const res = await fetch('https://api.smartconvert.ng/api/v1/list-testimonials')
            let data = await res.text()
            let parsedData = JSON.parse(data)
            parsedData.map(item => {
                if(item.status == true ){
                  this.testimonials.push(item)  
                }
            })
        },
    },
    mounted() {
        this.getTestimonials()
    },
});

// var coins = new Vue({ 
//     el: '#coins',
//     data: {
//         coins: [],
//     },

//     methods: {
//        async  getTestimonials(){
//             const res = await fetch('https://api.smartconvert.ng/api/v1/list-testimonials')
//             let data = await res.text()
//             let parsedData = JSON.parse(data)
//             parsedData.map(item => {
//                 if(item.status == true ){
//                   this.testimonials.push(item)  
//                 }
//             })
//         },
//     },
//     mounted() {
//         this.getTestimonials()
//     },
// });
