<template>
     <div class="item">
                <div class="top_zag">
                    <div class="zag">Врд на жительство</div>
                    <button type="button" class="edit"></button>
                    <button type="button" class="delete" @click="levelDelete"></button>
                </div>
                <ul class="spisok">
                    <li>
                        <span>Дата создания</span>
                        <strong>11.01.2022</strong>
                    </li>
                    
                    <li>
                        <span>Составитель</span>
                        <strong>Смирнов И.В.</strong>
                    </li>

                </ul>
                <a href="#" class="btn show_popup" rel="popup1" >Просмотр</a>
            </div>
</template>

<script>
    export default {
        name:"AdminLevelShowBox",
        methods:{
            levelDelete(){
                this.Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>