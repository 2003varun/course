from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# -------------------- USER MODEL --------------------
class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    # Relationship
    enrollments = db.relationship(
        "Enrollment",
        back_populates="user",
        cascade="all, delete-orphan"
    )


# -------------------- COURSE MODEL --------------------
class Course(db.Model):
    __tablename__ = "course"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=True)
    price = db.Column(db.String(20), nullable=True)

    # Relationship
    enrollments = db.relationship(
        "Enrollment",
        back_populates="course",
        cascade="all, delete-orphan"
    )


# -------------------- ENROLLMENT MODEL --------------------
class Enrollment(db.Model):
    __tablename__ = "enrollment"
    __table_args__ = {'extend_existing': True}   # prevents duplicate table error

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    course_id = db.Column(
        db.Integer,
        db.ForeignKey("course.id"),
        nullable=False
    )

    # Relationships
    user = db.relationship("User", back_populates="enrollments")
    course = db.relationship("Course", back_populates="enrollments")
