require "active_support/logger"
require "active_support/tagged_logging"

if defined?(DatabaseCleaner)
  # cleaning the database using database_cleaner
  DatabaseCleaner.strategy = :truncation
  DatabaseCleaner.clean
else
  logger.warn "add database_cleaner or update cypress/app_commands/clean.rb"
  Post.delete_all if defined?(Post)
end


pp "APP CLEANED BGY PP"

logger.warn "APPCLEANED" # used by log_fail.rb
Rails.logger.warn "APPCLEANED" # used by log_fail.rb
# @todo: fix logging from command 
# pp logger.inspect
# pp Rails.inspect
# 1st attempt failed again