source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.4.2'

gem 'rails', '~> 5.2.1'
gem 'pg'
gem 'puma', '~> 3.11'

gem 'bootsnap', '>= 1.1.0', require: false

gem 'graphiti'
gem 'responders', '~> 2.4'
gem 'kaminari'

gem 'bcrypt'
gem 'jwt'

gem 'pry'

gem 'webpacker'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails'
  gem 'cypress-on-rails', '~> 1.0'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'guard', require: false
  gem 'guard-rspec', require: false
  gem 'ruby_gntp', require: false
  gem 'terminal-notifier', require: false
  gem 'terminal-notifier-guard', require: false
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
  gem 'graphiti_spec_helpers'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'timecop'
  gem 'database_cleaner-active_record'
end