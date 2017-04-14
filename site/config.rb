page '/*.json', layout: false

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_host, :host => '/uoft-enrolment-charts'
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
