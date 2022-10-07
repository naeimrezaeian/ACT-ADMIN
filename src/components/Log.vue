<template>
    <div class="wrapper logs">       
       <div class="head filial">
           <h1>ЛОГ СИСТЕМЫ</h1>           
       </div>
       <div class="serch">
           <form>
               <div class="box">
                <input type="text" placeholder="Выбрать период" onfocus="(this.type='date')" class="dats">
                <select style="display: none !important"></select>   
                <select>
                       <option value="" disabled selected>Все действе</option>
                       <option value="1">1</option>
                       <option value="2">2</option>    
                       <option value="3">3</option>
                   </select>
                   <select>
                       <option value="" disabled selected>Все действе</option>
                       <option value="1">1</option>
                       <option value="2">2</option>    
                       <option value="3">3</option>
                   </select>
                   <select>
                       <option value="" disabled selected>Все успешность</option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                   </select>
               </div>
               <div class="box">
                   <input type="text" class="serch_in" value="" placeholder="Поиск по фамилии">
                   <span class="lup"></span>
                   <button type="button" class="btn">Поиск</button>
               </div>
           </form>
       </div>
       <div class="logshow">

        <div class="left">
        <div class="scroll">
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...Начало сообщения в две строки здесь может быть расположеноНачало сообщения в две строки здесь может быть расположено</div>
                        <hr/>
                    </div>
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                            <hr/>
                    </div>
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                            <hr/>
                    </div>
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                            <hr/>
                    </div>
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                            <hr/>
                    </div>
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                            <hr/>
                    </div>
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                            <hr/>
                    </div>
                    <div class="logtext">                        
                            <div class="text">Начало сообщения в две строки здесь может быть расположено...</div>
                            <hr/>
                    </div>
                  

                    
                </div>

            </div>
        </div>
   </div>
</template>

<script>
    export default {
        name:"AdminLog"
    }
</script>

<style lang="scss" scoped>

</style>