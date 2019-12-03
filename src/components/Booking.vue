<template>
  <div>
    <NavBar />
    <h1>Booking Enquiry</h1>
    <form action="/booking" method="post">
      <div class="form-group">
        <input type="name" class="form-control " placeholder="Name" />
      </div>
      <div class="form-group">
        <input type="number" class="form-control" placeholder="Phone number" />
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" />
      </div>

      <h3 class="text-bold">Fix an Appointment</h3>
      <div class="form-group">
        <input type="Date" class="form-control" placeholder="date" />
      </div>
      <div class="form-group">
        <input type="time" class="form-control" placeholder="time" />
      </div>
      <div>
        <select name="" class="form-control">
          <option value="#" selected>Treatment selection</option>
          <option value="massage">Massage</option>
          <option value="body trt">body Treatment</option>
          <option value="facials">Facials</option>
          <option value="nail">nail removal</option>
          <option value="medical">Medical Treatment</option>
        </select>
      </div>
      <br />
      <div>
        <textarea name="text" cols="10" rows="5" class="form-control">
                message</textarea
        >
      </div>
      <button type="submit">Book appointment</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "booking"
};
</script>

<style scoped>
form {
  width: 50%;
  height: auto;
  margin: 50px auto 0;
  padding: 50px;
}
button {
  margin-top: 2em;
  border: none;
  background: #ea3cce;
  border-radius: 20px;
  padding: 1em 4em;
}
</style>
