const testimonials = [
   {
      name: 'Claire Bell',
      role: 'Designer',
      avatar: 'https://i.pravatar.cc/300?img=5',
      testimonial: `
         Slate helps you see how many more days you need to work to reach your 
         financial goal for the month and year. Slate helps you see how many more 
         days you need to work to reach your financial goal for the month and year.`
   },
   {
      name: 'Ralph Fisher',
      role: 'CEO of Something',
      avatar: 'https://i.pravatar.cc/300?img=56',
      testimonial: `
         Slate helps you see how many more days you need to work to reach your 
         financial goal for the month and year. Slate helps you see how many more 
         days you need to work to reach your financial goal for the month and year.`
   },
   {
      name: 'Fransisco Lane',
      role: 'High-Tech Investor',
      avatar: 'https://i.pravatar.cc/300?img=44',
      testimonial: `
         Slate helps you see how many more days you need to work to reach your 
         financial goal for the month and year. Slate helps you see how many more 
         days you need to work to reach your financial goal for the month and year.`
   },
   {
      name: 'Jorge Murphy',
      role: 'Cool Guy',
      avatar: 'https://i.pravatar.cc/300?img=22',
      testimonial: `
         Slate helps you see how many more days you need to work to reach your 
         financial goal for the month and year. Slate helps you see how many more 
         days you need to work to reach your financial goal for the month and year.`
   },
]

const createTestimonialElement = (testimonial) => {
   var testimonialItem = document.createElement('div');
   testimonialItem.classList.add('testimonial--item');

   var testimonialItemHead = document.createElement('div');
   testimonialItemHead.classList.add('testimonial--item__head');

   var testimonialItemHeadImg = document.createElement('img');
   testimonialItemHeadImg.src = testimonial.avatar;
   testimonialItemHeadImg.alt = testimonial.name;
   testimonialItemHead.appendChild(testimonialItemHeadImg);

   var testimonialItemHeadDetails = document.createElement('div');
   testimonialItemHeadDetails.classList.add('testimonial--item__head__details');
   
   var testimonialItemHeadDetailsName = document.createElement('h4');
   testimonialItemHeadDetailsName.innerHTML = testimonial.name;
   testimonialItemHeadDetails.appendChild(testimonialItemHeadDetailsName);
   var testimonialItemHeadDetailsRole = document.createElement('span');
   testimonialItemHeadDetailsRole.innerHTML = testimonial.role;
   testimonialItemHeadDetails.appendChild(testimonialItemHeadDetailsRole);
   testimonialItemHead.appendChild(testimonialItemHeadDetails);
   testimonialItem.appendChild(testimonialItemHead);

   var testimonialItemBody = document.createElement('blockquote');
   testimonialItemBody.innerHTML = testimonial.testimonial;
   testimonialItem.appendChild(testimonialItemBody);

   return testimonialItem;
}

const loadTestimonials = () => {
   var testimonialGrid = document.getElementById('testimonials_grid');
   testimonials.forEach(function(testimonial) {
      var testimonialItem = createTestimonialElement(testimonial);
      testimonialGrid.appendChild(testimonialItem);
   });
}

loadTestimonials();