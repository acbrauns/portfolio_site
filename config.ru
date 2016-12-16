use Rack::Static,
  :urls => ["/images", "/js", "/css", "/font-awesome-4.3.0", "/fonts", "/mp3"],
  :root => "public"

map "/" do
  run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
end

map "/whattimeisit" do
  run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/whattimeisit.html', File::RDONLY)
  ]
}
end
