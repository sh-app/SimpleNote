class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_token
  has_many(
    :notes,
    class_name: 'Note',
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many(
    :notebooks,
    class_name: 'Notebook',
    primary_key: :id,
    foreign_key: :author_id,
    dependent: :destroy
  )

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if (user && user.is_password?(password))
    return nil
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_token
    SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = generate_token
    self.save
    session_token
  end

  private
  def ensure_token
    self.session_token ||= generate_token
  end
end
