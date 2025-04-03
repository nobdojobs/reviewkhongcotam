const movies = {
    "titanic": {
        title: "Titanic (1997)",
        genre: "Lãng mạn, Thảm họa, Hành động, Lịch sử",
        duration: "160 phút",
        country: "Mỹ",
        director: "James Cameron",
        cast: "Kate Winslet, Leonardo Dicaprio",
        imdb: "7.9/10",
        rottenTomatoes: "88% (phê bình), 69% (khán giả)",
        review: "Titanic (1997) của đạo diễn James Cameron là một trong những bộ phim nổi tiếng và thành công nhất mọi thời đại, kết hợp giữa yếu tố lịch sử và tình cảm lãng mạn.",
        pros: "✅️ Câu chuyện tình cảm hấp dẫn, ✅️ Hiệu ứng hình ảnh xuất sắc, ✅️ Diễn xuất tuyệt vời",
        cons: "❌️ Cốt truyện dễ đoán, ❌️ Một số tình tiết lãng mạn thái quá"
    },
    "shin-godzilla": {
        title: "Shin Godzilla (2016)",
        genre: "Khoa học viễn tưởng, Kinh dị, Chính trị - Xã hội, Kaiju",
        duration: "114 phút",
        country: "Nhật Bản",
        director: "Hideaki Anno, Shinji Higuchi",
        cast: "Hiroki Hasegawa, Yutaka Takenouchi, Satomi Ishihara",
        imdb: "6.8/10",
        rottenTomatoes: "86% (phê bình), 74% (khán giả)",
        review: "Shin Godzilla (2016) là một bộ phim Godzilla tái khởi động...",
        pros: "✅️ Cấu trúc kịch bản độc đáo, ✅️ Hiệu ứng hình ảnh ấn tượng",
        cons: "❌️ Nhịp độ chậm, ❌️ Thiếu hành động trực tiếp"
    },
    "Aquaman: Đế vương Atlantis": {
        title: "Aquaman: Đế vương Atlantis (2018)",
        genre: "Hành động, Phiêu lưu, Giả tưởng",
        duration: "143 phút",
        country: "Mỹ",
        director: "James Wan",
        cast: "Jason Momoa, Amber Heard, Nicole Kidman, Willem Dafoe",
        imdb: "6.8/10",
        rottenTomatoes: "66% (phê bình), 81% (khán giả)",
        review: "Aquaman: Đế vương Atlantis là một bộ phim giải trí với hình ảnh đẹp mắt, hành động kịch tính và sự tham gia ấn tượng của Jason Momoa. Bộ phim kể về đứa con lai sinh ra bởi nữ hoàng biển cả và người trần - Arthur Curry. Khi Atlantis đe dọa tới loài ngoài, Arthur buộc phải lên đường tìm kiếm cây đinh ba huyền thoại để ngăn chặn cuộc chiến và bảo vệ cả hai thế giới.",
        pros: "✅️Hình ảnh ấn tượng, ✅️Tình tiết giải trí cao, ✅️Diễn xuất của Jason Momoa",
        cons: "❌️Cốt truyện khá đơn giản, ❌️Một số pha hành động hơi dài dòng, ❌️Nhân vật phản diện chưa ấn tượng"
    },
    "Interstellar": {
        title: "Interstellar (2014)",
        genre: "Khoa học viễn tưởng, chính kịch",
        duration: "169 phút",
        country: "Mỹ",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Jessica Chastain, Anne Hathaway, Mackenzie Foy",
        imdb: "8.6/10",
        rottenTomatoes: "73% (phê bình), 86%(khán giả)",
        review: "Interstellar (2014) của đạo diễn Christopher Nolan là một bộ phim khoa học viễn tưởng khắc họa hành trình khám phá không gian nhằm cứu loài người.",
        pros: "✅️Cốt truyện sâu sắc và cảm động, ✅️Hiệu ứng hình ảnh tuyệt vời, ✅️Diễn xuất xuất sắc,✅️Nhạc phim huyền thoại",
        cons: "❌️Cốt truyện có phần phức tạp, ❌️Nhịp độ phim chậm, ❌️Khó kết nối với nhân vật phụ"
    },
    "Đào, Phở và Piano": {
        title: "Đào, Phở và Piano (2023)",
        genre: "Lịch sử, lãng mạn",
        duration: "100 phút",
        country: "Việt Nam",
        director: "Phi Tiến Sơn",
        cast: "Cao Thị Thùy Linh, Doãn Quốc Đam",
        imdb: "6.2/10",
        rottenTomatoes: "Chưa xác định",
        review: "Đào, Phở và Piano tái hiện chân thực bối cảnh Hà Nội trong những ngày kháng chiến chống Pháp, khắc họa sâu sắc tình yêu và lòng dũng cảm của những con người bình dị. Bộ phim sử dụng lối kể phi tuyến tính, giúp nhân vật trở nên rõ nét hơn mà không lấn át lẫn nhau.",
        pros: "✅️Cốt truyện cảm động, ✅️Diễn xuất tốt, ✅️Khắc họa tình người ",
        cons: "❌️Kỹ xảo và bối cảnh hạn chế, ❌️Dựng phim chưa mượt mà, ❌️Nhịp phim chậm"
    },
    "Inside Out": {
        title: "Inside Out (2015)",
        genre: "Hoạt hình, Hài hước, phiêu lưu",
        duration: "95 phút",
        country: "Mỹ",
        director: "Pete Doctor",
        cast: "Riley, Joy, Anger, Sadness, Disgust, Fear",
        imdb: "8.1/10",
        rottenTomatoes: "98% (phê bình), 89% (khán giả)",
        review: "Inside Out xoay quanh năm cảm xúc bên trong tâm trí cô bé Riley: Vui Vẻ (Joy), Buồn Bã (Sadness), Giận Dữ (Anger), Sợ Hãi (Fear) và Chán Ghét (Disgust). Khi gia đình Riley chuyển đến một thành phố mới, các cảm xúc phải hợp tác để giúp cô bé vượt qua khó khăn trong cuộc sống.",
        pros: "✅️Ý tưởng độc đáo, ✅️Thông điệp sâu sắc, ✅️Hình ảnh tươi sáng, âm nhạc hay, ✅ Nhân vật đáng nhớ",
        cons: "❌ Cốt truyện đơn giản, ❌ Một số cảnh hơi trừu tượng,"
    },
    "The return of Dang Dubai": {
        title: "The return of Dang Dubai (2025)",
        genre: "Hài hước, Cảm động",
        duration: "từ từ rồi biết :))",
        country: "Việt Nam",
        director: "Châu Bùi",
        cast: "Nhật Đăng, Châu Bùi, Minh Anh, Minh Hoàng,...",
        imdb: "10/10",
        rottenTomatoes: "100% (phê bình), 100% (khán giả)",
        review: "The return of Dang Dubai kể về ngày Tết 2025 đặc biệt khi cậu con trai đi làm xa nhà Đăng Dubai bất ngờ trở về nhà.",
        pros: "✅️ Cái gì cũng hay, 10/10",
        cons: "❌ Diễn viên chính cảm giác hơi bị ép"
    },
};

function toggleReview(movieId) {
    const reviewSection = document.getElementById("review-section");

    if (reviewSection.style.display === "block" && reviewSection.dataset.movieId === movieId) {
        reviewSection.style.display = "none";
        return;
    }

    reviewSection.dataset.movieId = movieId;

    const movie = movies[movieId];

    document.getElementById("review-title").innerText = movie.title;
    document.getElementById("review-genre").innerText = movie.genre;
    document.getElementById("review-duration").innerText = movie.duration;
    document.getElementById("review-country").innerText = movie.country;
    document.getElementById("review-director").innerText = movie.director;
    document.getElementById("review-cast").innerText = movie.cast;
    document.getElementById("review-imdb").innerText = movie.imdb;
    document.getElementById("review-rotten").innerText = movie.rottenTomatoes;
    document.getElementById("review-text").innerText = movie.review;
    document.getElementById("review-pros").innerText = movie.pros;
    document.getElementById("review-cons").innerText = movie.cons;

    reviewSection.style.display = "block";
}
