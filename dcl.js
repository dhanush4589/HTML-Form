let fetchData = async () => {
  let response = await fetch('https://dummyjson.com/products');
  let data = await response.json();

  let tbody = document.getElementById("tbody");

  data.products.forEach((m) => {
    tbody.innerHTML += `
      <tr>
        <td>${m.id}</td>
        <td>${m.title}</td>
        <td>${m.description}</td>
        <td>${m.category}</td>
        <td>${m.price}</td>
        <td>${m.discountPercentage}</td>
        <td>${m.rating}</td>
        <td>${m.brand}</td>
        <td><img src="${m.images[0]}" width="80"></td>
      </tr>
    `;
  });
};

// fetchData();

// ! Instance method
// ? .then()
// ? .catch()
// ? .finally()
// ! Static methods
// ? Promise.all()
// ? Promise.allSetelled()
// ? Promise.any()
// ? Promise.race()

// let p = new Promise((res, rej)=>{
//   res("hi i am resolved")
//   rej("hi i am reject")
// })

// p.then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=>{
//   console.log("hi i am finally");
// })

// let p1 = new Promise((res, rej)=>{
//   res("hi i am resolve 1")
//   rej("hi i am reject 1")
// })

// let p2 = new Promise((res, rej)=>{
//   res("hi i am resolve 2")
//   rej("hi i am reject 2")
// })

// let p3 = new Promise((res, rej)=>{
//   res("hi i am resolve 3")
//   rej("hi i am reject 3")
// })

// let p4 = new Promise((res, rej)=>{
//   res("hi i am resolve 4")
//   rej("hi i am reject 4")
// })

// let p5 = new Promise((res, rej)=>{
//   res("hi i am resolve 5")
//   rej("hi i am reject 5")
// })

// Promise.all([p1, p2, p3, p4, p5]).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })

// Promise.allSettled([p1, p2, p3, p4, p5]).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })

// Promise.any([p1, p2, p3, p4, p5]).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })

// Promise.race([p1, p2, p3, p4, p5]).then((result)=>{
//   console.log(result);
// })

// let p6 = new Promise((res, rej)=>{
//   setTimeout(()=>{
//     res("hi i am resolve 6")
//     rej("hi i am reject 6")
//   }, 3000)
// })

// let p7 = new Promise((res, rej)=>{
//   setTimeout(()=>{
//     res("hi i am resolve 7")
//     rej("hi i am reject 7")
//   }, 2000)
// })

// Promise.race([p6, p7]).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })

// let p8 = new Promise((res, rej)=>{
//   res(10)
// })

// p8.then((result)=>{
//   console.log(result);
//   return result * 10
// }).then((result)=>{
//   console.log(result);
//   return result * 10
// }).then((result)=>{
//   console.log(result);
//   return result * 10
// }).then((result)=>{
//   console.log(result);
// })

// console.log("One")
// console.log("Two")
// console.log("Three")

// setTimeout(()=>{
//   console.log("hi i am setTimeout")
// }, 3000)

// setTimeout(()=>{
//   console.log("hi i am setTimeout")
// })

// console.log("four")
// console.log("five")

// async function fetchApi(){
//   let res = await fetch("https://api.github.com/users")
//   console.log(res)
//   let data = await res.json()
//   console.log(data)
// }

// fetchApi()

// let obj = {
//   emp_id:420,
//   emp_name:"Laila",
//   emp_gender:"Female",
//   emp_location:"Majestic",
//   emp_salary:100000000,
// }
// console.log(obj);

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// // console.log(Object.freeze(obj))
// // console.log(Object.isFrozen(obj))
// // obj.emp_name = "majnu"
// // console.log(obj)

// obj.emp_email = "laila@gmail.com"
// console.log(obj)

// // delete obj.emp_name;
// // console.log(obj)

// console.log(Object.seal(obj))
// console.log(Object.isSealed(obj))

// obj.emp_name = "majnu"
// console.log(obj)

// obj.emp_email = "laila@gmail.com"
// console.log(obj)

// delete obj.emp_name;
// console.log(obj)