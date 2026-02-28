const destruc ={
  names: 'towfiq',
  id: '123',
  prof: 'job',
  sesion: 'a'
}
const result = {names, id, prof, sesion} = destruc
console.log(id);

const mySelf = {
  names: 'towfiq',
  age: 22,
  id: 4534,
  profession: 'developer',
  address:{
    district: 'dhaka',
    division: 'narsingdi',
    streat:{
      roadNo: 242,
      test: 'asfs'
    }
  }
}

const results ={
  names, age, id, profession, address:{
    district, division, streat:{
      roadNo, test
    }
  }
} = mySelf
console.log(names);
console.log(roadNo);
console.log(test);
