function processSubjects(subjects){
  subjects.forEach(function(item,index){
    var title = item.title;//电影标题
    var directorArray = item.directors;//导演
    var director = "";
    directorArray.forEach(function(obj,i){
      director += obj.name+"/";
    });
    if(director !== ""){
      director = director.slice(0,-2);
    }
    var castArray = item.casts;
    var casts = "";//主演
    castArray.forEach(function(obj,j){
      casts += obj.name+"/";
    });
    if(casts !== ""){
      casts = casts.slice(0,-2);
    }
    var genres = item.genres.join("/");//剧情
    var year = item.year;
    //
    var text = `名称: ${title}\n导演: ${director}\n主演: ${casts}\n类型:$ß{genres}\n上映年份: ${year}(中国大陆)`;
    item.text = text;
  });
}

module.exports = {
  processSubjects: processSubjects
}