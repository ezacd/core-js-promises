function queuPromises(promises) {
  return Promise.all(promises).then((res) => {
    return res.join('');
  });
}

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);
const promise4 = new Promise((resolve) => setTimeout(() => resolve(40), 10));

console.log(queuPromises([promise1, promise3, promise2]));
