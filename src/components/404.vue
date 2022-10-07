<template>
    <div id="main">
        <div class="fof">
            <h1>404</h1>
            <br/><br/><br/>
<h1>Страница не найдена</h1>
</div>
    </div>
</template>

<script>
    export default {
        name:"PageNotFound"
        
    }
</script>

<style  scoped>

#main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof{
	display: table-cell;
	vertical-align: middle;
}

.fof h1{
	font-size: 50px;
	display: inline-block;
	padding-right: 12px;
	
}


</style>