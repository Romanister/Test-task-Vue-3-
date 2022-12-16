<template>
  <div class="inventory__wrapper"> 
    <div class="inventory">
      <div class="ghost-elem">
        <img src="@/assets/01.jpg" alt="img">
        <div class="ghost-name"></div>
        <div class="ghost-discription" style="width:155px ;"></div>
        <div class="ghost-discription"></div>
        <div class="ghost-discription" style="width:170px ;"></div>
        <div class="ghost-discription" style="width:160px ;"></div>
        <div class="ghost-discription" style="width:140px ;"></div>
        <div class="ghost-discription" style="width:80px ;"></div>
      </div>
      <div class="grid">
      </div>
      <div class="ghost-serach">
        <div class="search"></div>
        <img src="@/assets/X.svg" alt="icon">
      </div>
    </div>
  </div>
  
</template>

<script>


export default {
 
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1E1E1E;
}
.inventory__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.inventory {
  width: 850px;
  height: 660px;
  padding: 32px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.ghost-elem {
  width: 235px;
  height: 500px;
  margin-right: 25px;
  background-color:#262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ghost-elem img {
  width: 210px;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  margin: 14px 18px 14px 20px ;
}
.grid {
  width: 525px;
  height: 500px;
  background-color:#262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
}
.ghost-name {
  width: 190px;
  height: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 50%, #333333 100%);
}
.ghost-discription {
  width: 190px;
  height: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 50%, #333333 100%);
}
.ghost-serach {
  width: 100%;
  height: 70px;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  padding: 18px 18px 0px 18px;
  display: flex;
}
.search {
  width: 700px;
  height: 35px;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 50%, #333333 100%);
  border-radius: 12px;
}
.ghost-serach img{
  width: 12px;
  height: 12px;
  margin-left: 40px;
  cursor: pointer;
}
</style>
