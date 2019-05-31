https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=1318532903321ecb1fe08f70c285ac5d


library(jsonlite)
library(httr)


marvel_character<- GET(paste0("http://www.omdbapi.com/?t='",input$movie_name,"'&y=",input$year,"&apikey=672de4d"))


marvel_character <- "https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=1318532903321ecb1fe08f70c285ac5d"
info<- content(x = marvel_character,as = "raw")

marvel_character<- URLencode(URL = "https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=1318532903321ecb1fe08f70c285ac5d")

marvel<- GET("https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=1318532903321ecb1fe08f70c285ac5d")

info <- fromJSON(movie,txt = "JSON")

info <- info$Poster
print(info)
return(info)



movie<- GET(paste0("https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&ts=",ts,"&apikey=1318532903321ecb1fe08f70c285ac5d&hash=",hash,""))
info<- content(x = movie,as = "text")
info <- fromJSON(info, flatten = TRUE)
info
library(digest)

privateKey <- "efba232189e63e19886950915edf0ce3f0c87468"
publicKey <- "1318532903321ecb1fe08f70c285ac5d"
ts <- Sys.time()

ts <- round(as.numeric(Sys.time()))
hash <- digest(paste0(ts, privateKey, publicKey), algo="md5")

hash_wo <- digest(paste0(1, privateKey, publicKey), algo="md5")


library(hash)
h <- hash( letters, 1:26 )
length(h) # 26
h


marvel_hash_params <- function() {
  
  ts <- round(as.numeric(Sys.time())*1000) # can totally be just Sys.time(), too
  public_key <- "1318532903321ecb1fe08f70c285ac5d"
  private_key <- "efba232189e63e19886950915edf0ce3f0c87468"
  to_hash <- sprintf("%s%s%s",
                     ts,
                     Sys.getenv("MARVEL_API_PRIVATE_KEY"),
                     Sys.getenv("MARVEL_API_PUBLIC_KEY"))
  
  list(
    ts=ts,
    hash=digest::digest(to_hash, "md5", FALSE),
    apikey=Sys.getenv("MARVEL_API_PUBLIC_KEY")
  )
  
}

sprintf("I woke up at %d:%d%d a.m.", 8, 0, 5)

marvel_hash_params()
library(jsonlite)
library(httr)

get_characters <- function(name) {
  
  params <- marvel_hash_params()
  params$name <- 'iron man'
  
  res <- httr::GET("https://gateway.marvel.com:443/v1/public/characters",
                   query=params)
  
  # httr::stop_for_status(res)
  # 
  # httr::content(res, as="parsed")
  
  info<- content(x = res,as = "text")
  info <- fromJSON(info,flatten = TRUE)
  info
}

get_characters("spider-man")

get_characters("iron man")


get_characters <- function(name) {
  
  params <- marvel_hash_params()
  params$name <- name
  
  res <- httr::GET("https://gateway.marvel.com:443/v1/public/characters",
                   query=params)
  
  httr::stop_for_status(res)
  
  httr::content(res, as="parsed")
  
}

get_characters("iron man")
