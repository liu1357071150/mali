<template>
  <div class="hello">
  </div>
</template>

<script>
  import axios from 'axios';

export default {
  data() {
    return {
      information:[]
    }
  },
  mounted(){
    axios.get("/information").then((response)=>{
      let res = response.data;
      if(res.status == 0){
        this.information=res.result;
      }else{
        this.information=[];
      }
    });
  }
}
</script>

