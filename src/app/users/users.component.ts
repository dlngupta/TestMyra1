import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  constructor() { }
  email:string="";
  ngOnInit(): void {
    this.users.forEach((data:any)=> {
      let date = new Date(data.expiry_date);
      let currentDate = new Date();
      // var Time = currentDate.getTime() - date.getTime();
      // data.expiry_days=Time / (1000 * 3600 * 24);
      data.expiry_days = Math.floor((date.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
      //data.expiry_days=new Date(data.login_date).getDay()-new Date(data.expiry_date).getDay();
    });
  }
  users:any=[
    {
      id: 1,
      full_name: "Boy Jelkes",
      last_name: "Strooband",
      email: "bjelkes0@economist.com",
      gender: "Male",
      contact: "418-674-3869",
      login_date:"21/03/2023",
      expiry_date:"2023-03-28",
      expiry_days:0,
      img_address:"data:image/jpeg;base64,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",
      user_mode:"Weekends"
    },
    {
      id: 2,
      full_name: "Layton",
      last_name: "Strooband",
      email: "lkinnerk1@hhs.gov",
      gender: "Male",
      contact: "672-859-6880",
      expiry_date:"2023-04-28",
      expiry_days:0,
      user_mode:"Quartelry",
      img_address:"https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic="
    },
    {
      id: 3,
      full_name: "Murvyn",
      last_name: "Strooband",
      email: "mstrooband2@unc.edu",
      gender: "Male",
      contact: "939-169-8552",
      expiry_date:"2023-03-28",
      expiry_days:0,
      user_mode:"Monthly",
      img_address:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAkAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAADBAYFAgcBAP/EADcQAAICAgEDAgQEBQEJAQAAAAECAAMEESEFEjEGQRMiUWFCcYGRFDJSodGxFSRDU2KCweHwB//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EAB0RAQEBAQEBAQEBAQAAAAAAAAABAhEhAzESIkH/2gAMAwEAAhEDEQA/AJJVhUWfFEMiyvEeuq15jKpOa0h1WFxbLuGPV3njRg6rEvrcqRtm4+3ET9SOQKq1PB5MB0RMizIAqRn35GpL6VXEfbKbabe5CwG+e0f+JmZhY2kDRPtr/Etcqh6qyBUSdfMjDephXNi1s26WV9+Sdj/MnKaysVsbsr73Pb9ovx4HMdz3Nrgkcga+sU+Gx8KTG6HAp3XY9Th63KsPcT4UI8gz5qMCo6J1X+Lb4F51d+E+zf8AuariQ2Ne+NkJcmu5DvRlrjZC5eMlyeGHiNKTU56FYIu4jbiK2CMADwLQrwLGBx5RD1rzOUWMVLHIIiwoWfkEIqwCnuuqTn1qfdOOJXeiOnivFa+wD4lnv9B7Sa9QKEspfwT8oMu/SygYFevBA1M31vrV8vxp5GBTk16sRePB14k/nemca5z7886lemtc+IDIdBsDUjV4jR6VwQdumzFMjotCHtVAB7Ssv58GZWYp9xxE7VJIiOp9MSnYC8yfvq7ZadWdezt9zJHN/m1L/O1D6SESJXenQf8AZKb/AKmkkZZen17ek1fck/3l8/rNv8HsEVsGzHLRE7vEchS0aMXcw1hi7mcLbQQ9Y54nCCHQRkxUhVnCDUKsAsnr1BvTGUe94X95ddMrTDx66VPCjWzJbOx/jYxsU80utgGvOiN/2mpn4mRmWoEveuhV+YJxv8zMv15dNfx8yp6cuqwhVsUn7GdZNQddgzzHMosprZkzb+1WI3SpOjrfJ9uOedR/071DqXxFSzMtuqcfKLho/oYlnIrm9vFf8M9x2RM7qViisjgfSNZrnHxjkOdKBszzjqnqDIzcp0xm7EB0Nf6xJn+lNa/mdM9WbtYkuPy3JrJYM2wY5nY11V3bnNf8TW9Ea/bcz7auO6tu5f8ASXznjLrX9BGXHSFC9KxgP+WDIciVnp/qD5S2UOqhalXs19PErm+panh+0RK/xHrfMSujpkbYtZGbouQDvZnGUSCMIIJBGEEKbtRCAT4onaznPpBbEykA/wCCxH7SnxqBbiBWJGxzqTlYY/EVfxIw/PjcqekuLcVG/qUGZfrP9Nvxv+GdkdAW3pr4g7fgdxZfYqTwfz2PrFul9MGPkLtB2VL2r2/nvf7ypddpocbieSVqA1wJPV8VxPWN6pIHQrxvwpnk2CwXJRyPfY/OerepQz9GyOPKmeRo3Zbx9YfmH084rs+gdQ7spu34zLon+qTduM1RcN/abfTMgtUFinVu1QTxsxpb0usznU+wlJ6VxmWq3JY8P8i/p5k43mWfQ6fhdLo533Du/eXzPWbd8HtESuHEeuETtEpU+s+4RSyO3DnmKWqIDKhBGFEDWIwsZJ2ohFnKwggF+VjWwdfIm16ZvLYKKx5Xan9DqYxHEc9Nv2ZGVST+IOo+xH+RI/aedX+GuXis38nMzuqG5cdrMdFssUbVGOhC5GQKq+5jxr2mJlZ2VlbrorKIvJczJa2wt6j6jfj+nrlyqkSxwQPhnuB+k8oUF258z0psbOfKX41qNjdh2xsBCGRHU8MUZTPVclg7vKtxKfO88T+k76NgN8Ksb8xTqd/xONz5a9qpvWteTErXLeY+Z6XWvOGukYA6jlmpnZVC9xKiW1dS01LWg0qL2gTC9H0fJfey+SEB/LzKN/E0ZZN33hK6JXGN3GKWD6xgIXMd7MVtbiPWKpiNoUWaPiAZVZWIdYOtOIUCMmIsIonCwqwOftQX8R/A5tWV+Aj4dn2Hsf8A76w4E4urWxGRxtWGiD7wanZw0vL1t/xCXppTsEe0A/R8Y19wLFidsHc9p/TephdMvs6aAtz/ABcNm7a7wd9uvZpT0sl6fK21YexmDU5XpYss6m+pYOJXYPivpR5TuOpH9bx1NxNNQWsGX3UugYdjtY1thJ8/NJjq+NiYtWkHP9W42dem1ezieycpP4FaFUbHvMxEe6xaqh3Ox0o+sNllQxC/WE6LdXjdSovyG7a1J2fpx5lsxk1Vx0zDXCwqqAdlR8x+/vDWeJ2GDKGUggjgj3grTqWjMUuEz8hisftMQyeRCJGxz7GKWnfvGLDFbIDRb1niEHJgFhVjpDLCLBKYQEAEk6A94HCgzE9TdYXBxzRS3+82DQ1+AfUzrP8AUOFiI4rsFtwHyqo2N/cyHybrMm577m7rHO2MXWlsY77XpnoGtMn0xVXaA6lnBU8+5n7qPTuo9NuV+mWhsfXNLnQH6zM//Ms8CnIwXOir96D7GXlqravzCZb+tOaguodT62E02CwX3YEESS6nm5Nu1uQqdnzPVs3HqposPgdv0nlfU+6/IssKsATxuHP67VvGVosdmfXGhqMJXpSYGwSiXFN6T6i1lL4dp2a/mQk/h+n6TZtfZkDi5FmJkJfUdMp/f7Tdp9Q028X1tWfqDsSkqes+tixhqI5DDU6/iUtTurYMPqInkWcahLIWsaLuYR2i7GcaLY2pWhZ2Cge7HURyvUOFR8tfdc3/AEeP3kndkXZL919jOfuYIeILsZ8p/wBbuR6nynBFFaUj6/zGZuR1HNyV7bsmx1+ndof2iZn0RP6tUmcuuTPzDicg8zs+IFIc9P5zdP6pVcp43pp7HhZS5OOtinYInha/X7z1D0Va7dPAZiRqJqBlR5fayENIL1HRSgLIPmPsJaZfIkrnItl/zjfPvFMkLEKoBrkxf4W+7Y0ANmbHUkUdQCgcADQiWaArXADXyCPKSxlP4g53Z7flOIxKJVfZSd1uVMaTqBbi1f8AuERn0RpS8aJsDDakEQTGK/ynY4hgSV5jOf/Z"
    },
    {
      id: 4,
      full_name: "Diena",
      last_name: "Blunderfield",
      email: "dblunderfield3@ow.ly",
      gender: "Agender",
      contact: "690-119-5025",
      expiry_date:"2023-04-28",
      expiry_days:0,
      user_mode:"Yearly",
      img_address:"https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic="
    },
    {
      id: 5,
      full_name: "Thaddeus",
      last_name: "Hugill",
      email: "thugill4@altervista.org",
      gender: "Male",
      contact: "420-769-0163",
      expiry_date:"2023-03-28",
      expiry_days:0,
      user_mode:"Half Yearly",
      img_address:"data:image/jpeg;base64,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"

    },
    {
      id: 6,
      full_name: "Orin",
      last_name: "Steane",
      email: "osteane5@shareasale.com",
      gender: "Male",
      contact: "233-960-7349",
      expiry_date:"2023-04-28",
      expiry_days:0,
      user_mode:"Yearly",
      img_address:"https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic="
    },
    {
      id: 7,
      full_name: "Lilias",
      last_name: "Poultney",
      email: "lpoultney6@ovh.net",
      gender: "Female",
      contact: "117-504-5108",
      expiry_date:"2023-03-28",
      expiry_days:0,
      user_mode:"Monthly",
      img_address:"data:image/jpeg;base64,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"
    },
    {
      id: 8,
      full_name: "Milissent",
      last_name: "Doble",
      email: "mdoble7@bloglines.com",
      gender: "Female",
      contact: "682-683-1965",
      expiry_date:"2023-04-28",
      expiry_days:0,
      user_mode:"Yearly",
      img_address:"https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic="
    },
    {
      id: 9,
      full_name: "Melly",
      last_name: "Gwynne",
      email: "mgwynne8@zdnet.com",
      gender: "Female",
      contact: "305-681-5092",
      expiry_date:"2023-03-28",
      expiry_days:0,
      user_mode:"Weekends",
      img_address:"data:image/jpeg;base64,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"
    },
    {
      id: 10,
      full_name: "Marcille",
      last_name: "O'Scollee",
      email: "moscollee9@behance.net",
      gender: "Female",
      contact: "441-918-3431",
      expiry_date:"2023-04-28",
      expiry_days:0,
      user_mode:"Monthly",
      img_address:"https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic="
    }
  ]

  // adduserForm={
  //   id: number,
  //     full_name:string,
  //     last_name: "",
  //     email: "",
  //     gender: "",
  //     contact: "",
  //     login_date:"21/03/2023",
  //     expiry_date:"2023-03-28",
  //     expiry_days:0,
  //     img_address:"",
  //     user_mode:"Weekends"
  // }
  url:any;

  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url= event?.target.result;
      }
    }
  }

}
