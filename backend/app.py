from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity

from models import db, User, Enrollment
from auth import auth

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# ---------------- CONFIG ----------------
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["JWT_SECRET_KEY"] = "super-secret-key"

# ---------------- INIT ----------------
db.init_app(app)
jwt = JWTManager(app)

# ---------------- ROUTES ----------------
app.register_blueprint(auth)


@app.route("/")
def home():
    return jsonify({"message": "Backend connected successfully"})


# --------------- USER --------------
@app.route("/me")
@jwt_required()
def me():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    return jsonify({
        "id": user.id,
        "name": user.name,
        "email": user.email
    })


# --------------- ENROLL --------------
@app.route("/enroll", methods=["POST"])
@jwt_required()
def enroll():
    user_id = int(get_jwt_identity())
    data = request.get_json()
    course_id = data.get("course_id")

    if not course_id:
        return jsonify({"message": "Course ID required"}), 400

    existing = Enrollment.query.filter_by(
        user_id=user_id,
        course_id=course_id
    ).first()

    if existing:
        return jsonify({"message": "Already enrolled"}), 400

    enrollment = Enrollment(user_id=user_id, course_id=course_id)
    db.session.add(enrollment)
    db.session.commit()

    return jsonify({"message": "Enrolled successfully"})


# ---------------- CREATE TABLES ----------------
with app.app_context():
    db.create_all()


# ---------------- RUN ----------------
if __name__ == "__main__":
    app.run(debug=True)
