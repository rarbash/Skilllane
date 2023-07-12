interface courseInfo {
  name: String;
  description: String;
  image?: String;
  category: String;
  subject: String;
  numberStudent: String;
  createdAt: String;
}

export default function CourseCard(props: courseInfo) {
  return (
    <div className="w-72 rounded overflow-hidden shadow-lg mb-10 md:mb-0 hover:scale-105 has-tooltip">
      {props.image ? (
        <img
          className="w-full h-40"
          src={props.image.toString()}
          alt="course image"
        />
      ) : (
        <img className="w-full h-40" src="mock.jpg" alt="course image" />
      )}
      <div className="flex flex-col justify-between px-6 py-4 h-56">
        <div className="font-bold text-xl line-clamp-2">{props.name}</div>
        <p className="text-gray-700 text-sm line-clamp-2">
          {props.description}
        </p>
        <p className="text-gray-500 text-xs line-clamp-1">
          หมวดหมู่: {props.category}
        </p>
        <p className="text-gray-500 text-xs line-clamp-1">
          หมวดหมู่ย่อย: {props.subject}
        </p>
        <p className="text-gray-500 text-xs line-clamp-1">
          จำนวนที่เปิดรับ:{" "}
          {props.numberStudent === "" ? "ไม่จำกัด" : props.numberStudent}
        </p>
        <p className="text-gray-500 text-xs line-clamp-1 mt-4">
          วันที่สร้างคอร์ส: {props.createdAt.slice(0, 10)}
        </p>
      </div>
    </div>
  );
}
