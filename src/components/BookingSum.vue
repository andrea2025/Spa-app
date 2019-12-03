<template>
  <div class="Summary">
    <div class="d-flex justify-content-between">
        
<div>
          <div>
            <h1>Booking Summary</h1>
          </div>
          <div class="d-flex justify-content-center">
            <form action="" method="get">
              <button type="submit" class="btn_edit">Edit</button>
            </form>
            <form action="" method="get">
              <button type="submit" class="btn_cancel">Cancel</button>
            </form>
          </div>
        </div>
        <i class="fa fa-plus-circle" aria-hidden="true"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: "Summary"
};
</script>
<style scoped>
i {
  font-size: 7em;
  /* margin-left: 10em;
  margin-bottom: 5em; */
}
.btn_edit {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #ea3cce;
  border-radius: 20px;
  border: none;
  padding: 1em 3em;
}
.btn_edit:hover {
  background: linear-gradient(rgba(255, 255, 255, 0) 100%), #ea3cce;
}
.btn_cancel {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 1em 2em;
}
.btn_cancel:hover {
  background: rgb(172, 46, 46);
  color: #fff;
}
</style>
