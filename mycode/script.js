// ============================================
//  B2 ESSAY VOCABULARY GUIDE — MAIN SCRIPT
//  Features: Search, Filter, Flashcards, Quiz,
//            Toggle VI, Dark Mode, Progress, Practice
// ============================================

// ---- DATA ----

const VOCAB_DATA = {
  education: [
    { word: "academic achievement", vi: "thành tích học tập", meaning: "The level of success in educational activities.", meaningVi: "Mức độ thành công trong các hoạt động học tập.", usage: "Used to describe results or performance in school.", usageVi: "Dùng để mô tả kết quả hoặc thành tích ở trường.", example: "Improving academic achievement requires consistent effort.", exampleVi: "Cải thiện thành tích học tập đòi hỏi sự nỗ lực liên tục." },
    { word: "curriculum", vi: "chương trình học", meaning: "The set of subjects and materials taught at school.", meaningVi: "Tập hợp các môn học và tài liệu được dạy ở trường.", usage: "Describes the range of subjects or overall study plan.", usageVi: "Mô tả các môn học hoặc kế hoạch học tập tổng thể.", example: "The school revised its curriculum to include digital skills.", exampleVi: "Nhà trường đã sửa đổi chương trình học để bao gồm kỹ năng số." },
    { word: "critical thinking", vi: "tư duy phản biện", meaning: "The ability to analyse and evaluate information objectively.", meaningVi: "Khả năng phân tích và đánh giá thông tin một cách khách quan.", usage: "Used in discussions about skills needed in modern education.", usageVi: "Dùng trong thảo luận về kỹ năng cần thiết trong giáo dục hiện đại.", example: "Schools should promote critical thinking from an early age.", exampleVi: "Các trường học nên khuyến khích tư duy phản biện từ sớm." },
    { word: "compulsory education", vi: "giáo dục bắt buộc", meaning: "Education that all children are legally required to receive.", meaningVi: "Giáo dục mà tất cả trẻ em được pháp luật yêu cầu phải nhận.", usage: "Common in policy discussions about education systems.", usageVi: "Thường dùng trong thảo luận về chính sách hệ thống giáo dục.", example: "Most countries have laws on compulsory education up to age 16.", exampleVi: "Hầu hết các quốc gia có luật về giáo dục bắt buộc đến 16 tuổi." },
    { word: "vocational training", vi: "đào tạo nghề", meaning: "Education that prepares people for a specific trade or job.", meaningVi: "Giáo dục chuẩn bị con người cho một ngành nghề cụ thể.", usage: "Used when comparing academic and practical career paths.", usageVi: "Dùng khi so sánh con đường học thuật và nghề nghiệp thực tế.", example: "Vocational training can be just as valuable as a university degree.", exampleVi: "Đào tạo nghề có thể có giá trị không kém bằng đại học." },
    { word: "distance learning", vi: "học từ xa", meaning: "Education delivered online or by post, without attending a classroom.", meaningVi: "Giáo dục được thực hiện trực tuyến hoặc qua bưu điện, không đến lớp.", usage: "Useful when discussing modern education methods and technology.", usageVi: "Hữu ích khi thảo luận về phương pháp giáo dục hiện đại và công nghệ.", example: "Distance learning has become increasingly popular since 2020.", exampleVi: "Học từ xa ngày càng trở nên phổ biến kể từ năm 2020." },
    { word: "tuition fee", vi: "học phí", meaning: "The money paid for receiving education at an institution.", meaningVi: "Số tiền phải trả để nhận giáo dục tại một cơ sở.", usage: "Relevant when discussing access to education and inequality.", usageVi: "Liên quan khi thảo luận về tiếp cận giáo dục và bất bình đẳng.", example: "Rising tuition fees prevent many students from attending university.", exampleVi: "Học phí tăng cao khiến nhiều sinh viên không thể vào đại học." },
    { word: "lifelong learning", vi: "học tập suốt đời", meaning: "The ongoing pursuit of knowledge throughout one's life.", meaningVi: "Việc tìm kiếm kiến thức liên tục trong suốt cuộc đời.", usage: "Used in essays about personal development and career growth.", usageVi: "Dùng trong bài luận về phát triển cá nhân và tăng trưởng nghề nghiệp.", example: "Employers now value lifelong learning more than formal qualifications.", exampleVi: "Nhà tuyển dụng hiện nay đánh giá học tập suốt đời hơn bằng cấp chính quy." },
    { word: "literacy rate", vi: "tỷ lệ biết đọc biết viết", meaning: "The percentage of people who can read and write in a population.", meaningVi: "Tỷ lệ phần trăm người có thể đọc và viết trong dân số.", usage: "Used in essays about education inequality and development.", usageVi: "Dùng trong bài luận về bất bình đẳng giáo dục và phát triển.", example: "Countries with higher literacy rates tend to have stronger economies.", exampleVi: "Các quốc gia có tỷ lệ biết chữ cao hơn thường có nền kinh tế mạnh hơn." },
    { word: "extracurricular activities", vi: "hoạt động ngoại khóa", meaning: "Activities outside the regular school curriculum.", meaningVi: "Các hoạt động ngoài chương trình học chính thức.", usage: "Mentioned in essays about holistic education and student development.", usageVi: "Được đề cập trong bài luận về giáo dục toàn diện và phát triển học sinh.", example: "Extracurricular activities help students develop social skills.", exampleVi: "Hoạt động ngoại khóa giúp học sinh phát triển kỹ năng xã hội." },
    { word: "academic pressure", vi: "áp lực học tập", meaning: "Stress and demands placed on students to perform well.", meaningVi: "Stress và áp lực đặt ra cho học sinh để thực hiện tốt.", usage: "Common in essays about student mental health and education reform.", usageVi: "Phổ biến trong bài luận về sức khỏe tâm thần học sinh và cải cách giáo dục.", example: "Excessive academic pressure can harm students' mental wellbeing.", exampleVi: "Áp lực học tập quá lớn có thể gây hại cho sức khỏe tâm thần của học sinh." },
    { word: "scholarship", vi: "học bổng", meaning: "Financial support given to a student to help pay for education.", meaningVi: "Hỗ trợ tài chính cho học sinh để trả tiền học.", usage: "Used when discussing access to education and merit-based support.", usageVi: "Dùng khi thảo luận về tiếp cận giáo dục và hỗ trợ dựa trên thành tích.", example: "She received a full scholarship to study medicine abroad.", exampleVi: "Cô ấy nhận được học bổng toàn phần để học y khoa ở nước ngoài." },
    { word: "standardised testing", vi: "kiểm tra tiêu chuẩn hóa", meaning: "Exams where all students take the same test under the same conditions.", meaningVi: "Các kỳ thi mà tất cả học sinh làm cùng một bài kiểm tra trong cùng điều kiện.", usage: "Used in debates about fairness and effectiveness of assessment.", usageVi: "Dùng trong tranh luận về sự công bằng và hiệu quả của đánh giá.", example: "Critics argue that standardised testing does not reflect true ability.", exampleVi: "Các nhà phê bình cho rằng kiểm tra tiêu chuẩn hóa không phản ánh năng lực thực sự." },
    { word: "peer learning", vi: "học nhóm / học cùng bạn", meaning: "Learning from and with other students at a similar level.", meaningVi: "Học hỏi từ và cùng với các học sinh ở trình độ tương đương.", usage: "Effective in collaborative and student-centred classrooms.", usageVi: "Hiệu quả trong các lớp học hợp tác và lấy học sinh làm trung tâm.", example: "Peer learning encourages students to explain concepts to each other.", exampleVi: "Học nhóm khuyến khích học sinh giải thích các khái niệm cho nhau." },
    { word: "educational inequality", vi: "bất bình đẳng giáo dục", meaning: "Unequal access to quality education based on wealth, location, or background.", meaningVi: "Sự tiếp cận không bình đẳng với giáo dục chất lượng dựa trên sự giàu có, địa điểm hoặc xuất thân.", usage: "Central to essays about social justice and education policy.", usageVi: "Trung tâm của bài luận về công bằng xã hội và chính sách giáo dục.", example: "Educational inequality remains a significant challenge globally.", exampleVi: "Bất bình đẳng giáo dục vẫn là một thách thức đáng kể trên toàn cầu." }
  ],
  technology: [
    { word: "artificial intelligence", vi: "trí tuệ nhân tạo", meaning: "Computer systems that simulate human intelligence.", meaningVi: "Các hệ thống máy tính mô phỏng trí tuệ con người.", usage: "Used broadly in essays about tech advancement and its impacts.", usageVi: "Dùng rộng rãi trong bài luận về tiến bộ công nghệ và tác động của nó.", example: "Artificial intelligence is transforming industries worldwide.", exampleVi: "Trí tuệ nhân tạo đang chuyển đổi các ngành công nghiệp trên toàn thế giới." },
    { word: "digital divide", vi: "khoảng cách số", meaning: "The gap between those who have access to technology and those who do not.", meaningVi: "Khoảng cách giữa những người có và không có quyền truy cập công nghệ.", usage: "Key term in essays about inequality in the digital age.", usageVi: "Thuật ngữ chính trong bài luận về bất bình đẳng trong thời đại số.", example: "The digital divide widens inequality between rich and poor countries.", exampleVi: "Khoảng cách số làm tăng bất bình đẳng giữa các nước giàu và nghèo." },
    { word: "cybersecurity", vi: "an ninh mạng", meaning: "Practices to protect computers and networks from digital attacks.", meaningVi: "Các biện pháp bảo vệ máy tính và mạng khỏi các cuộc tấn công kỹ thuật số.", usage: "Mentioned in essays about online safety and privacy.", usageVi: "Được đề cập trong bài luận về an toàn trực tuyến và quyền riêng tư.", example: "Governments must invest in cybersecurity to protect citizens' data.", exampleVi: "Chính phủ phải đầu tư vào an ninh mạng để bảo vệ dữ liệu của người dân." },
    { word: "automation", vi: "tự động hóa", meaning: "The use of technology to perform tasks without human involvement.", meaningVi: "Việc sử dụng công nghệ để thực hiện các nhiệm vụ mà không cần sự tham gia của con người.", usage: "Used when discussing the impact of technology on jobs.", usageVi: "Dùng khi thảo luận về tác động của công nghệ đối với việc làm.", example: "Automation threatens many traditional manufacturing jobs.", exampleVi: "Tự động hóa đe dọa nhiều việc làm sản xuất truyền thống." },
    { word: "innovation", vi: "đổi mới / sáng tạo", meaning: "The introduction of new ideas, methods, or technologies.", meaningVi: "Sự giới thiệu các ý tưởng, phương pháp hoặc công nghệ mới.", usage: "Common in essays about progress, business, and development.", usageVi: "Phổ biến trong bài luận về tiến bộ, kinh doanh và phát triển.", example: "Innovation in renewable energy is essential for a sustainable future.", exampleVi: "Đổi mới trong năng lượng tái tạo là cần thiết cho một tương lai bền vững." },
    { word: "social media", vi: "mạng xã hội", meaning: "Online platforms that allow users to share content and communicate.", meaningVi: "Các nền tảng trực tuyến cho phép người dùng chia sẻ nội dung và giao tiếp.", usage: "Used in essays about communication, influence, and mental health.", usageVi: "Dùng trong bài luận về giao tiếp, ảnh hưởng và sức khỏe tâm thần.", example: "Social media has profoundly changed how people share information.", exampleVi: "Mạng xã hội đã thay đổi sâu sắc cách mọi người chia sẻ thông tin." },
    { word: "data privacy", vi: "quyền riêng tư dữ liệu", meaning: "The right of individuals to control how their personal data is used.", meaningVi: "Quyền của cá nhân kiểm soát cách sử dụng dữ liệu cá nhân của họ.", usage: "Important in essays about technology ethics and regulation.", usageVi: "Quan trọng trong bài luận về đạo đức công nghệ và quy định.", example: "Data privacy laws vary significantly between countries.", exampleVi: "Luật bảo vệ dữ liệu cá nhân khác nhau đáng kể giữa các quốc gia." },
    { word: "misinformation", vi: "thông tin sai lệch", meaning: "False or inaccurate information that is spread unintentionally.", meaningVi: "Thông tin sai hoặc không chính xác được lan truyền vô tình.", usage: "Used in essays about media, social networks, and public trust.", usageVi: "Dùng trong bài luận về truyền thông, mạng xã hội và niềm tin cộng đồng.", example: "Misinformation can cause serious harm to public health.", exampleVi: "Thông tin sai lệch có thể gây hại nghiêm trọng cho sức khỏe cộng đồng." },
    { word: "screen time", vi: "thời gian sử dụng màn hình", meaning: "The amount of time spent using devices with screens.", meaningVi: "Lượng thời gian dành cho việc sử dụng thiết bị có màn hình.", usage: "Common in essays about children, health, and modern lifestyle.", usageVi: "Phổ biến trong bài luận về trẻ em, sức khỏe và lối sống hiện đại.", example: "Excessive screen time has been linked to poor sleep quality.", exampleVi: "Thời gian sử dụng màn hình quá nhiều được liên kết với chất lượng giấc ngủ kém." },
    { word: "e-commerce", vi: "thương mại điện tử", meaning: "Buying and selling products or services over the internet.", meaningVi: "Mua và bán sản phẩm hoặc dịch vụ qua internet.", usage: "Used in essays about economy, business, and consumer behaviour.", usageVi: "Dùng trong bài luận về kinh tế, kinh doanh và hành vi người tiêu dùng.", example: "E-commerce has revolutionised the retail industry.", exampleVi: "Thương mại điện tử đã cách mạng hóa ngành bán lẻ." },
    { word: "remote work", vi: "làm việc từ xa", meaning: "Working from home or a location other than the office using technology.", meaningVi: "Làm việc tại nhà hoặc địa điểm khác ngoài văn phòng bằng công nghệ.", usage: "Used in essays about work-life balance and modern employment.", usageVi: "Dùng trong bài luận về cân bằng công việc-cuộc sống và việc làm hiện đại.", example: "Remote work became the norm for many during the pandemic.", exampleVi: "Làm việc từ xa trở thành chuẩn mực với nhiều người trong đại dịch." },
    { word: "algorithm", vi: "thuật toán", meaning: "A set of rules or instructions that a computer follows to complete a task.", meaningVi: "Một tập hợp các quy tắc hoặc hướng dẫn mà máy tính theo dõi để hoàn thành nhiệm vụ.", usage: "Used in discussions about how platforms and apps work.", usageVi: "Dùng trong thảo luận về cách các nền tảng và ứng dụng hoạt động.", example: "Social media algorithms determine what content users see.", exampleVi: "Thuật toán mạng xã hội xác định nội dung người dùng nhìn thấy." },
    { word: "renewable technology", vi: "công nghệ tái tạo", meaning: "Technology that generates energy from natural, sustainable sources.", meaningVi: "Công nghệ tạo ra năng lượng từ các nguồn tự nhiên, bền vững.", usage: "Used in essays linking technology and the environment.", usageVi: "Dùng trong bài luận liên kết công nghệ và môi trường.", example: "Renewable technology such as solar panels is becoming cheaper.", exampleVi: "Công nghệ tái tạo như tấm pin mặt trời đang trở nên rẻ hơn." },
    { word: "virtual reality", vi: "thực tế ảo", meaning: "A computer-generated simulation of a three-dimensional environment.", meaningVi: "Mô phỏng máy tính về môi trường ba chiều.", usage: "Used in essays about the future of education, gaming, or medicine.", usageVi: "Dùng trong bài luận về tương lai của giáo dục, trò chơi hoặc y học.", example: "Virtual reality is being used to train surgeons safely.", exampleVi: "Thực tế ảo đang được dùng để đào tạo bác sĩ phẫu thuật một cách an toàn." },
    { word: "technological dependency", vi: "sự phụ thuộc vào công nghệ", meaning: "Excessive reliance on technology for daily functioning.", meaningVi: "Sự phụ thuộc quá mức vào công nghệ cho hoạt động hàng ngày.", usage: "Useful in essays about the downsides of technology.", usageVi: "Hữu ích trong bài luận về mặt trái của công nghệ.", example: "Technological dependency is a growing concern among psychologists.", exampleVi: "Sự phụ thuộc vào công nghệ là mối lo ngại ngày càng tăng trong giới tâm lý học." }
  ],
  environment: [
    { word: "climate change", vi: "biến đổi khí hậu", meaning: "Long-term shifts in global temperatures and weather patterns.", meaningVi: "Sự thay đổi lâu dài trong nhiệt độ và kiểu thời tiết toàn cầu.", usage: "The most common environmental term in B2 essays.", usageVi: "Thuật ngữ môi trường phổ biến nhất trong bài luận B2.", example: "Climate change is causing more frequent extreme weather events.", exampleVi: "Biến đổi khí hậu đang gây ra các hiện tượng thời tiết cực đoan thường xuyên hơn." },
    { word: "carbon footprint", vi: "dấu chân carbon", meaning: "The total greenhouse gas emissions caused by an individual or organisation.", meaningVi: "Tổng lượng khí thải nhà kính do một cá nhân hoặc tổ chức gây ra.", usage: "Used in essays about personal or corporate responsibility.", usageVi: "Dùng trong bài luận về trách nhiệm cá nhân hoặc doanh nghiệp.", example: "Reducing your carbon footprint can start with small daily changes.", exampleVi: "Giảm dấu chân carbon có thể bắt đầu bằng những thay đổi nhỏ hàng ngày." },
    { word: "deforestation", vi: "nạn phá rừng", meaning: "The large-scale removal of trees and forests.", meaningVi: "Việc chặt phá cây và rừng trên quy mô lớn.", usage: "Central term in essays about biodiversity and climate.", usageVi: "Thuật ngữ trọng tâm trong bài luận về đa dạng sinh học và khí hậu.", example: "Deforestation in the Amazon threatens global biodiversity.", exampleVi: "Nạn phá rừng ở Amazon đe dọa đa dạng sinh học toàn cầu." },
    { word: "biodiversity", vi: "đa dạng sinh học", meaning: "The variety of life (plants, animals, organisms) in a given area.", meaningVi: "Sự đa dạng của sự sống (thực vật, động vật, sinh vật) trong một khu vực nhất định.", usage: "Used in essays about nature, conservation, and ecosystems.", usageVi: "Dùng trong bài luận về thiên nhiên, bảo tồn và hệ sinh thái.", example: "Protecting biodiversity is vital for healthy ecosystems.", exampleVi: "Bảo vệ đa dạng sinh học là rất quan trọng cho các hệ sinh thái lành mạnh." },
    { word: "greenhouse gas", vi: "khí nhà kính", meaning: "Gases that trap heat in the atmosphere, causing warming.", meaningVi: "Các khí giữ nhiệt trong khí quyển, gây ra sự ấm lên.", usage: "Used when explaining the mechanism of climate change.", usageVi: "Dùng khi giải thích cơ chế biến đổi khí hậu.", example: "Burning fossil fuels releases large amounts of greenhouse gases.", exampleVi: "Đốt nhiên liệu hóa thạch thải ra lượng lớn khí nhà kính." },
    { word: "sustainable development", vi: "phát triển bền vững", meaning: "Economic growth that meets current needs without harming future generations.", meaningVi: "Tăng trưởng kinh tế đáp ứng nhu cầu hiện tại mà không gây hại cho thế hệ tương lai.", usage: "Key phrase in essays about environment and policy.", usageVi: "Cụm từ chính trong bài luận về môi trường và chính sách.", example: "Sustainable development balances economic growth and environmental care.", exampleVi: "Phát triển bền vững cân bằng tăng trưởng kinh tế và bảo vệ môi trường." },
    { word: "renewable energy", vi: "năng lượng tái tạo", meaning: "Energy from sources that are naturally replenished (sun, wind, water).", meaningVi: "Năng lượng từ các nguồn được tự nhiên bổ sung (mặt trời, gió, nước).", usage: "Important in essays about energy policy and climate solutions.", usageVi: "Quan trọng trong bài luận về chính sách năng lượng và giải pháp khí hậu.", example: "Switching to renewable energy is crucial to combat climate change.", exampleVi: "Chuyển sang năng lượng tái tạo là rất quan trọng để chống biến đổi khí hậu." },
    { word: "pollution", vi: "ô nhiễm", meaning: "The presence of harmful substances in the environment.", meaningVi: "Sự hiện diện của các chất độc hại trong môi trường.", usage: "Broad term used in many environmental essays.", usageVi: "Thuật ngữ rộng dùng trong nhiều bài luận về môi trường.", example: "Air pollution is a major health risk in many cities.", exampleVi: "Ô nhiễm không khí là một rủi ro sức khỏe lớn ở nhiều thành phố." },
    { word: "ecosystem", vi: "hệ sinh thái", meaning: "A community of living organisms interacting with their environment.", meaningVi: "Một cộng đồng sinh vật sống tương tác với môi trường của chúng.", usage: "Used when discussing nature, environmental balance, and biology.", usageVi: "Dùng khi thảo luận về thiên nhiên, cân bằng môi trường và sinh học.", example: "Destroying wetlands disrupts entire ecosystems.", exampleVi: "Phá hủy đất ngập nước làm gián đoạn toàn bộ hệ sinh thái." },
    { word: "fossil fuels", vi: "nhiên liệu hóa thạch", meaning: "Non-renewable energy sources such as coal, oil, and natural gas.", meaningVi: "Các nguồn năng lượng không tái tạo như than đá, dầu mỏ và khí tự nhiên.", usage: "Central to discussions about energy, emissions, and climate.", usageVi: "Trọng tâm trong thảo luận về năng lượng, khí thải và khí hậu.", example: "Many countries still depend heavily on fossil fuels for electricity.", exampleVi: "Nhiều quốc gia vẫn còn phụ thuộc nhiều vào nhiên liệu hóa thạch để sản xuất điện." },
    { word: "conservation", vi: "bảo tồn", meaning: "Protecting natural resources and the environment from damage.", meaningVi: "Bảo vệ tài nguyên thiên nhiên và môi trường khỏi bị hủy hoại.", usage: "Used in essays about wildlife, nature, and environmental policy.", usageVi: "Dùng trong bài luận về động vật hoang dã, thiên nhiên và chính sách môi trường.", example: "Wildlife conservation efforts have helped some species recover.", exampleVi: "Các nỗ lực bảo tồn động vật hoang dã đã giúp một số loài phục hồi." },
    { word: "global warming", vi: "sự nóng lên toàn cầu", meaning: "The gradual increase in Earth's average temperature.", meaningVi: "Sự tăng dần trong nhiệt độ trung bình của Trái Đất.", usage: "Used interchangeably with climate change in essay writing.", usageVi: "Được dùng thay thế với biến đổi khí hậu trong viết luận.", example: "Global warming is accelerating due to human activities.", exampleVi: "Sự nóng lên toàn cầu đang tăng tốc do các hoạt động của con người." },
    { word: "single-use plastic", vi: "nhựa dùng một lần", meaning: "Plastic items designed to be used only once, then thrown away.", meaningVi: "Các sản phẩm nhựa được thiết kế để sử dụng một lần rồi vứt bỏ.", usage: "Used in essays about waste, pollution, and consumer habits.", usageVi: "Dùng trong bài luận về rác thải, ô nhiễm và thói quen tiêu dùng.", example: "Banning single-use plastics is a step towards reducing ocean pollution.", exampleVi: "Cấm nhựa dùng một lần là bước tiến tới giảm ô nhiễm đại dương." },
    { word: "natural disaster", vi: "thảm họa thiên nhiên", meaning: "A severe natural event such as a flood, earthquake, or hurricane.", meaningVi: "Một sự kiện tự nhiên nghiêm trọng như lũ lụt, động đất hoặc bão.", usage: "Used in essays about the environment, risk, and climate change.", usageVi: "Dùng trong bài luận về môi trường, rủi ro và biến đổi khí hậu.", example: "Natural disasters are becoming more severe due to climate change.", exampleVi: "Các thảm họa thiên nhiên đang trở nên nghiêm trọng hơn do biến đổi khí hậu." },
    { word: "net zero emissions", vi: "phát thải ròng bằng 0", meaning: "A state where greenhouse gas emissions are balanced by their removal.", meaningVi: "Trạng thái mà lượng khí thải nhà kính được cân bằng bởi việc loại bỏ chúng.", usage: "Modern term used in climate policy essays.", usageVi: "Thuật ngữ hiện đại dùng trong bài luận về chính sách khí hậu.", example: "Many governments have pledged to reach net zero emissions by 2050.", exampleVi: "Nhiều chính phủ đã cam kết đạt phát thải ròng bằng 0 vào năm 2050." }
  ],
  health: [
    { word: "mental health", vi: "sức khỏe tâm thần", meaning: "A person's emotional, psychological, and social wellbeing.", meaningVi: "Sức khỏe cảm xúc, tâm lý và xã hội của một người.", usage: "Very common in modern essays about wellbeing and society.", usageVi: "Rất phổ biến trong bài luận hiện đại về sức khỏe và xã hội.", example: "Schools should provide better support for students' mental health.", exampleVi: "Các trường học nên cung cấp hỗ trợ tốt hơn cho sức khỏe tâm thần của học sinh." },
    { word: "obesity", vi: "béo phì", meaning: "The condition of being significantly overweight, harmful to health.", meaningVi: "Tình trạng thừa cân đáng kể, có hại cho sức khỏe.", usage: "Used in essays about diet, lifestyle, and public health policy.", usageVi: "Dùng trong bài luận về chế độ ăn uống, lối sống và chính sách sức khỏe cộng đồng.", example: "Childhood obesity is a growing public health crisis in many countries.", exampleVi: "Béo phì ở trẻ em là một cuộc khủng hoảng sức khỏe cộng đồng ngày càng gia tăng." },
    { word: "sedentary lifestyle", vi: "lối sống ít vận động", meaning: "A way of living that involves little physical activity.", meaningVi: "Một cách sống liên quan đến ít hoạt động thể chất.", usage: "Useful in essays about health, technology, and modern life.", usageVi: "Hữu ích trong bài luận về sức khỏe, công nghệ và cuộc sống hiện đại.", example: "A sedentary lifestyle significantly increases the risk of heart disease.", exampleVi: "Lối sống ít vận động làm tăng đáng kể nguy cơ mắc bệnh tim." },
    { word: "preventive healthcare", vi: "chăm sóc sức khỏe phòng ngừa", meaning: "Medical care focused on preventing illness before it occurs.", meaningVi: "Chăm sóc y tế tập trung vào việc ngăn chặn bệnh tật trước khi xảy ra.", usage: "Relevant in essays about healthcare systems and public policy.", usageVi: "Liên quan trong bài luận về hệ thống chăm sóc sức khỏe và chính sách công.", example: "Preventive healthcare saves money and improves quality of life.", exampleVi: "Chăm sóc sức khỏe phòng ngừa tiết kiệm tiền và cải thiện chất lượng cuộc sống." },
    { word: "well-being", vi: "sức khỏe / hạnh phúc", meaning: "The state of being comfortable, healthy, and happy.", meaningVi: "Trạng thái thoải mái, khỏe mạnh và hạnh phúc.", usage: "Broad term used in many health and social essays.", usageVi: "Thuật ngữ rộng dùng trong nhiều bài luận về sức khỏe và xã hội.", example: "Work-life balance is essential for overall well-being.", exampleVi: "Cân bằng công việc-cuộc sống là cần thiết cho sức khỏe tổng thể." },
    { word: "chronic disease", vi: "bệnh mãn tính", meaning: "A long-term health condition that usually cannot be cured completely.", meaningVi: "Tình trạng sức khỏe dài hạn thường không thể chữa khỏi hoàn toàn.", usage: "Used in essays about healthcare burden and lifestyle diseases.", usageVi: "Dùng trong bài luận về gánh nặng chăm sóc sức khỏe và bệnh tật lối sống.", example: "Diabetes is one of the most common chronic diseases worldwide.", exampleVi: "Bệnh tiểu đường là một trong những bệnh mãn tính phổ biến nhất trên thế giới." },
    { word: "healthcare system", vi: "hệ thống y tế", meaning: "The organisation of institutions and services providing health care.", meaningVi: "Tổ chức các cơ sở và dịch vụ cung cấp chăm sóc sức khỏe.", usage: "Used in essays comparing countries' approaches to healthcare.", usageVi: "Dùng trong bài luận so sánh cách tiếp cận chăm sóc sức khỏe của các quốc gia.", example: "An effective healthcare system is the backbone of a healthy society.", exampleVi: "Một hệ thống y tế hiệu quả là nền tảng của một xã hội khỏe mạnh." },
    { word: "vaccination", vi: "tiêm chủng", meaning: "The administration of a vaccine to stimulate immunity against disease.", meaningVi: "Việc tiêm một loại vắc-xin để kích thích miễn dịch chống lại bệnh.", usage: "Very relevant in essays about public health and pandemics.", usageVi: "Rất liên quan trong bài luận về sức khỏe cộng đồng và đại dịch.", example: "Widespread vaccination has nearly eliminated some deadly diseases.", exampleVi: "Tiêm chủng rộng rãi đã gần như loại bỏ một số bệnh nguy hiểm chết người." },
    { word: "diet", vi: "chế độ ăn uống", meaning: "The kind of food and drink a person habitually consumes.", meaningVi: "Loại thức ăn và đồ uống mà một người thường xuyên tiêu thụ.", usage: "Used in essays about nutrition, health, and lifestyle.", usageVi: "Dùng trong bài luận về dinh dưỡng, sức khỏe và lối sống.", example: "A balanced diet rich in vegetables reduces disease risk.", exampleVi: "Chế độ ăn uống cân bằng giàu rau củ làm giảm nguy cơ mắc bệnh." },
    { word: "stress", vi: "căng thẳng", meaning: "A state of mental or emotional strain caused by pressure.", meaningVi: "Trạng thái căng thẳng tinh thần hoặc cảm xúc do áp lực gây ra.", usage: "Used in essays about work, health, and modern life challenges.", usageVi: "Dùng trong bài luận về công việc, sức khỏe và thách thức cuộc sống hiện đại.", example: "Prolonged stress can weaken the immune system significantly.", exampleVi: "Căng thẳng kéo dài có thể làm suy yếu hệ thống miễn dịch đáng kể." },
    { word: "addiction", vi: "nghiện", meaning: "A compulsive dependence on a substance or behaviour.", meaningVi: "Sự phụ thuộc bắt buộc vào một chất hoặc hành vi.", usage: "Used in essays about substance abuse, gambling, or technology.", usageVi: "Dùng trong bài luận về lạm dụng chất, cờ bạc hoặc công nghệ.", example: "Social media addiction is increasingly recognised as a real condition.", exampleVi: "Nghiện mạng xã hội ngày càng được công nhận là tình trạng thực sự." },
    { word: "life expectancy", vi: "tuổi thọ trung bình", meaning: "The average number of years a person is expected to live.", meaningVi: "Số năm trung bình một người được dự kiến sống.", usage: "Used in essays about healthcare systems, development, and aging.", usageVi: "Dùng trong bài luận về hệ thống y tế, phát triển và lão hóa.", example: "Life expectancy has risen steadily in developed nations.", exampleVi: "Tuổi thọ trung bình đã tăng đều đặn ở các quốc gia phát triển." },
    { word: "physical activity", vi: "hoạt động thể chất", meaning: "Exercise or movement that improves or maintains fitness.", meaningVi: "Tập thể dục hoặc vận động để cải thiện hoặc duy trì thể lực.", usage: "Used in essays about health and modern lifestyles.", usageVi: "Dùng trong bài luận về sức khỏe và lối sống hiện đại.", example: "Regular physical activity reduces the risk of chronic disease.", exampleVi: "Hoạt động thể chất thường xuyên giảm nguy cơ mắc bệnh mãn tính." },
    { word: "healthcare access", vi: "tiếp cận chăm sóc sức khỏe", meaning: "The ability of individuals to obtain needed medical services.", meaningVi: "Khả năng của cá nhân để nhận được các dịch vụ y tế cần thiết.", usage: "Used in essays about inequality and healthcare reform.", usageVi: "Dùng trong bài luận về bất bình đẳng và cải cách chăm sóc sức khỏe.", example: "Lack of healthcare access is a serious problem in rural areas.", exampleVi: "Thiếu tiếp cận chăm sóc sức khỏe là vấn đề nghiêm trọng ở các vùng nông thôn." },
    { word: "pandemic", vi: "đại dịch", meaning: "An epidemic of disease that has spread across a large region or worldwide.", meaningVi: "Một dịch bệnh đã lan rộng trên một vùng lớn hoặc toàn thế giới.", usage: "Very relevant in contemporary health and society essays.", usageVi: "Rất liên quan trong các bài luận về sức khỏe và xã hội đương đại.", example: "The COVID-19 pandemic reshaped healthcare systems globally.", exampleVi: "Đại dịch COVID-19 đã tái định hình các hệ thống y tế trên toàn cầu." }
  ],
  society: [
    { word: "social inequality", vi: "bất bình đẳng xã hội", meaning: "Unequal distribution of wealth, opportunities, and privileges in society.", meaningVi: "Sự phân phối không đồng đều về của cải, cơ hội và đặc quyền trong xã hội.", usage: "Core term in essays about justice and social structure.", usageVi: "Thuật ngữ cốt lõi trong bài luận về công bằng và cấu trúc xã hội.", example: "Social inequality is one of the most pressing issues of our time.", exampleVi: "Bất bình đẳng xã hội là một trong những vấn đề cấp bách nhất của thời đại." },
    { word: "urbanisation", vi: "đô thị hóa", meaning: "The process by which more people come to live in cities.", meaningVi: "Quá trình ngày càng nhiều người đến sống ở các thành phố.", usage: "Used in essays about population, cities, and development.", usageVi: "Dùng trong bài luận về dân số, thành phố và phát triển.", example: "Rapid urbanisation has put pressure on city infrastructure.", exampleVi: "Đô thị hóa nhanh chóng đã tạo áp lực lên cơ sở hạ tầng thành phố." },
    { word: "gender equality", vi: "bình đẳng giới", meaning: "The equal treatment of all genders in rights and opportunities.", meaningVi: "Sự đối xử bình đẳng với tất cả giới tính về quyền và cơ hội.", usage: "Common in essays about human rights and modern society.", usageVi: "Phổ biến trong bài luận về nhân quyền và xã hội hiện đại.", example: "Gender equality in the workplace remains an ongoing challenge.", exampleVi: "Bình đẳng giới tại nơi làm việc vẫn là một thách thức đang diễn ra." },
    { word: "immigration", vi: "nhập cư", meaning: "The movement of people into a country to live permanently.", meaningVi: "Sự di chuyển của người dân đến một quốc gia để sống lâu dài.", usage: "Used in essays about culture, economy, and national identity.", usageVi: "Dùng trong bài luận về văn hóa, kinh tế và bản sắc dân tộc.", example: "Immigration has both benefits and challenges for host countries.", exampleVi: "Nhập cư có cả lợi ích và thách thức cho các quốc gia tiếp nhận." },
    { word: "cultural diversity", vi: "đa dạng văn hóa", meaning: "The existence of different cultures within a society.", meaningVi: "Sự tồn tại của các nền văn hóa khác nhau trong một xã hội.", usage: "Used when discussing multiculturalism and social values.", usageVi: "Dùng khi thảo luận về đa văn hóa và các giá trị xã hội.", example: "Cultural diversity enriches communities and promotes understanding.", exampleVi: "Đa dạng văn hóa làm phong phú cộng đồng và thúc đẩy sự hiểu biết." },
    { word: "ageing population", vi: "dân số già hóa", meaning: "A demographic trend where the proportion of older people increases.", meaningVi: "Xu hướng nhân khẩu học mà tỷ lệ người cao tuổi tăng lên.", usage: "Used in essays about social welfare, pensions, and healthcare.", usageVi: "Dùng trong bài luận về phúc lợi xã hội, hưu trí và chăm sóc sức khỏe.", example: "An ageing population places greater demands on public services.", exampleVi: "Dân số già hóa đặt ra nhiều yêu cầu hơn đối với các dịch vụ công." },
    { word: "poverty", vi: "nghèo đói", meaning: "The state of having insufficient money for basic needs.", meaningVi: "Tình trạng không có đủ tiền cho các nhu cầu cơ bản.", usage: "Essential term in essays about social justice and inequality.", usageVi: "Thuật ngữ thiết yếu trong bài luận về công bằng xã hội và bất bình đẳng.", example: "Poverty remains a major barrier to access for healthcare and education.", exampleVi: "Nghèo đói vẫn là rào cản lớn đối với tiếp cận y tế và giáo dục." },
    { word: "community", vi: "cộng đồng", meaning: "A group of people living in the same area or sharing common interests.", meaningVi: "Một nhóm người sống trong cùng một khu vực hoặc chia sẻ lợi ích chung.", usage: "Used broadly in essays about society and social issues.", usageVi: "Dùng rộng rãi trong bài luận về xã hội và các vấn đề xã hội.", example: "Strong communities provide support for vulnerable individuals.", exampleVi: "Các cộng đồng mạnh cung cấp hỗ trợ cho các cá nhân dễ bị tổn thương." },
    { word: "volunteering", vi: "tình nguyện", meaning: "Freely giving time or skills to help others without payment.", meaningVi: "Tự do cống hiến thời gian hoặc kỹ năng để giúp đỡ người khác mà không có thù lao.", usage: "Used in essays about civic responsibility and social values.", usageVi: "Dùng trong bài luận về trách nhiệm công dân và các giá trị xã hội.", example: "Volunteering builds empathy and strengthens community bonds.", exampleVi: "Tình nguyện xây dựng sự đồng cảm và củng cố mối gắn kết cộng đồng." },
    { word: "social media influence", vi: "ảnh hưởng mạng xã hội", meaning: "The power of social media to shape people's opinions and behaviours.", meaningVi: "Sức mạnh của mạng xã hội để định hình ý kiến và hành vi của mọi người.", usage: "Used in essays about communication, media, and culture.", usageVi: "Dùng trong bài luận về truyền thông, phương tiện truyền thông và văn hóa.", example: "Social media influence on young people raises important ethical questions.", exampleVi: "Ảnh hưởng mạng xã hội lên giới trẻ đặt ra những câu hỏi đạo đức quan trọng." },
    { word: "discrimination", vi: "phân biệt đối xử", meaning: "Treating people unfairly based on characteristics like race or gender.", meaningVi: "Đối xử không công bằng với mọi người dựa trên đặc điểm như chủng tộc hoặc giới tính.", usage: "Used in essays about equality, law, and social justice.", usageVi: "Dùng trong bài luận về bình đẳng, pháp luật và công bằng xã hội.", example: "Discrimination in the workplace is both harmful and illegal.", exampleVi: "Phân biệt đối xử tại nơi làm việc vừa có hại vừa bất hợp pháp." },
    { word: "work-life balance", vi: "cân bằng công việc và cuộc sống", meaning: "The equilibrium between professional duties and personal time.", meaningVi: "Sự cân bằng giữa nhiệm vụ nghề nghiệp và thời gian cá nhân.", usage: "Common in essays about modern working culture and health.", usageVi: "Phổ biến trong bài luận về văn hóa làm việc hiện đại và sức khỏe.", example: "Achieving work-life balance is increasingly difficult in modern careers.", exampleVi: "Đạt được cân bằng công việc và cuộc sống ngày càng khó khăn trong sự nghiệp hiện đại." },
    { word: "social media addiction", vi: "nghiện mạng xã hội", meaning: "Compulsive use of social platforms that negatively affects daily life.", meaningVi: "Việc sử dụng cưỡng bức các nền tảng xã hội ảnh hưởng tiêu cực đến cuộc sống hàng ngày.", usage: "Used in essays about technology, youth, and mental health.", usageVi: "Dùng trong bài luận về công nghệ, giới trẻ và sức khỏe tâm thần.", example: "Social media addiction is closely linked to depression in teenagers.", exampleVi: "Nghiện mạng xã hội có mối liên hệ chặt chẽ với trầm cảm ở thanh thiếu niên." },
    { word: "human rights", vi: "nhân quyền", meaning: "Basic rights and freedoms that every person is entitled to.", meaningVi: "Các quyền và tự do cơ bản mà mỗi người có quyền được hưởng.", usage: "Used in essays about law, politics, and society.", usageVi: "Dùng trong bài luận về luật pháp, chính trị và xã hội.", example: "Protecting human rights is a universal obligation for all governments.", exampleVi: "Bảo vệ nhân quyền là nghĩa vụ toàn cầu của tất cả chính phủ." },
    { word: "social welfare", vi: "phúc lợi xã hội", meaning: "Government programs providing support to vulnerable members of society.", meaningVi: "Các chương trình chính phủ cung cấp hỗ trợ cho các thành viên dễ bị tổn thương trong xã hội.", usage: "Used in essays about government responsibility and economics.", usageVi: "Dùng trong bài luận về trách nhiệm chính phủ và kinh tế.", example: "Social welfare programs help reduce poverty and protect the vulnerable.", exampleVi: "Các chương trình phúc lợi xã hội giúp giảm nghèo và bảo vệ người dễ bị tổn thương." }
  ],
  economy: [
    { word: "economic growth", vi: "tăng trưởng kinh tế", meaning: "An increase in the production of goods and services in an economy.", meaningVi: "Sự tăng lên trong sản xuất hàng hóa và dịch vụ trong một nền kinh tế.", usage: "Used in essays about development, policy, and prosperity.", usageVi: "Dùng trong bài luận về phát triển, chính sách và thịnh vượng.", example: "Economic growth does not always translate into reduced poverty.", exampleVi: "Tăng trưởng kinh tế không phải lúc nào cũng dẫn đến giảm nghèo đói." },
    { word: "unemployment", vi: "thất nghiệp", meaning: "The state of people who are able to work but cannot find jobs.", meaningVi: "Tình trạng những người có khả năng làm việc nhưng không tìm được việc làm.", usage: "Common in essays about economy, society, and policy.", usageVi: "Phổ biến trong bài luận về kinh tế, xã hội và chính sách.", example: "High unemployment rates lead to increased poverty and social unrest.", exampleVi: "Tỷ lệ thất nghiệp cao dẫn đến nghèo đói và bất ổn xã hội tăng lên." },
    { word: "inflation", vi: "lạm phát", meaning: "A general rise in prices, reducing the purchasing power of money.", meaningVi: "Sự tăng giá chung, làm giảm sức mua của tiền.", usage: "Used in essays about economics and standards of living.", usageVi: "Dùng trong bài luận về kinh tế và mức sống.", example: "High inflation erodes the savings of ordinary citizens.", exampleVi: "Lạm phát cao làm xói mòn tiết kiệm của người dân bình thường." },
    { word: "globalisation", vi: "toàn cầu hóa", meaning: "The process of international integration in trade, culture, and communication.", meaningVi: "Quá trình hội nhập quốc tế trong thương mại, văn hóa và truyền thông.", usage: "Key term in economic and social essays about world connections.", usageVi: "Thuật ngữ quan trọng trong bài luận kinh tế và xã hội về kết nối thế giới.", example: "Globalisation has increased trade but also led to job losses in some sectors.", exampleVi: "Toàn cầu hóa đã tăng thương mại nhưng cũng dẫn đến mất việc làm ở một số lĩnh vực." },
    { word: "income gap", vi: "khoảng cách thu nhập", meaning: "The difference in earnings between the richest and poorest in society.", meaningVi: "Sự chênh lệch thu nhập giữa người giàu nhất và nghèo nhất trong xã hội.", usage: "Used in essays about inequality and economic fairness.", usageVi: "Dùng trong bài luận về bất bình đẳng và công bằng kinh tế.", example: "The income gap between the top 1% and the rest is widening.", exampleVi: "Khoảng cách thu nhập giữa 1% giàu nhất và phần còn lại ngày càng rộng ra." },
    { word: "consumer spending", vi: "chi tiêu của người tiêu dùng", meaning: "The money spent by households on goods and services.", meaningVi: "Số tiền các hộ gia đình chi cho hàng hóa và dịch vụ.", usage: "Useful in essays about economic cycles and policy.", usageVi: "Hữu ích trong bài luận về chu kỳ kinh tế và chính sách.", example: "Consumer spending drives a large part of most modern economies.", exampleVi: "Chi tiêu của người tiêu dùng thúc đẩy một phần lớn các nền kinh tế hiện đại." },
    { word: "foreign investment", vi: "đầu tư nước ngoài", meaning: "Capital invested in a country by foreign individuals or companies.", meaningVi: "Vốn được đầu tư vào một quốc gia bởi các cá nhân hoặc công ty nước ngoài.", usage: "Used in essays about economic development and globalisation.", usageVi: "Dùng trong bài luận về phát triển kinh tế và toàn cầu hóa.", example: "Foreign investment has helped many developing countries modernise.", exampleVi: "Đầu tư nước ngoài đã giúp nhiều quốc gia đang phát triển hiện đại hóa." },
    { word: "trade deficit", vi: "thâm hụt thương mại", meaning: "When a country imports more goods than it exports.", meaningVi: "Khi một quốc gia nhập khẩu nhiều hàng hóa hơn xuất khẩu.", usage: "Used in economic essays about international trade and policy.", usageVi: "Dùng trong bài luận kinh tế về thương mại quốc tế và chính sách.", example: "A persistent trade deficit can weaken a country's currency.", exampleVi: "Thâm hụt thương mại liên tục có thể làm suy yếu tiền tệ của một quốc gia." },
    { word: "minimum wage", vi: "lương tối thiểu", meaning: "The lowest legal amount an employer must pay a worker.", meaningVi: "Số tiền hợp pháp thấp nhất mà người sử dụng lao động phải trả cho công nhân.", usage: "Used in essays about workers' rights and economic policy.", usageVi: "Dùng trong bài luận về quyền lợi người lao động và chính sách kinh tế.", example: "Raising the minimum wage can reduce poverty but may affect employment.", exampleVi: "Tăng lương tối thiểu có thể giảm nghèo nhưng có thể ảnh hưởng đến việc làm." },
    { word: "public sector", vi: "khu vực công", meaning: "The part of the economy controlled and run by the government.", meaningVi: "Phần của nền kinh tế được chính phủ kiểm soát và điều hành.", usage: "Used in essays about government, economy, and employment.", usageVi: "Dùng trong bài luận về chính phủ, kinh tế và việc làm.", example: "The public sector plays a key role in providing essential services.", exampleVi: "Khu vực công đóng vai trò chính trong việc cung cấp các dịch vụ thiết yếu." },
    { word: "private sector", vi: "khu vực tư nhân", meaning: "The part of the economy run by private individuals and companies.", meaningVi: "Phần của nền kinh tế do các cá nhân và công ty tư nhân điều hành.", usage: "Contrasted with public sector in economic and policy essays.", usageVi: "Đối lập với khu vực công trong các bài luận kinh tế và chính sách.", example: "The private sector often leads innovation and technological development.", exampleVi: "Khu vực tư nhân thường dẫn đầu về đổi mới và phát triển công nghệ." },
    { word: "tax policy", vi: "chính sách thuế", meaning: "Government decisions about how taxes are collected and used.", meaningVi: "Các quyết định của chính phủ về cách thu và sử dụng thuế.", usage: "Used in essays about economics, government, and inequality.", usageVi: "Dùng trong bài luận về kinh tế, chính phủ và bất bình đẳng.", example: "Progressive tax policy can help reduce the income gap in society.", exampleVi: "Chính sách thuế lũy tiến có thể giúp giảm khoảng cách thu nhập trong xã hội." },
    { word: "market competition", vi: "cạnh tranh thị trường", meaning: "Rivalry between businesses trying to win customers and profit.", meaningVi: "Sự cạnh tranh giữa các doanh nghiệp cố gắng giành khách hàng và lợi nhuận.", usage: "Used in essays about business, economy, and policy.", usageVi: "Dùng trong bài luận về kinh doanh, kinh tế và chính sách.", example: "Healthy market competition drives innovation and lowers prices.", exampleVi: "Cạnh tranh thị trường lành mạnh thúc đẩy đổi mới và hạ giá cả." },
    { word: "economic recession", vi: "suy thoái kinh tế", meaning: "A period of significant decline in economic activity.", meaningVi: "Một giai đoạn suy giảm đáng kể trong hoạt động kinh tế.", usage: "Used in essays about business cycles and government response.", usageVi: "Dùng trong bài luận về chu kỳ kinh doanh và phản ứng của chính phủ.", example: "The 2008 economic recession had lasting effects on global markets.", exampleVi: "Suy thoái kinh tế năm 2008 có tác động lâu dài đến thị trường toàn cầu." },
    { word: "sustainable economy", vi: "nền kinh tế bền vững", meaning: "An economy that supports long-term growth without depleting resources.", meaningVi: "Một nền kinh tế hỗ trợ tăng trưởng dài hạn mà không cạn kiệt tài nguyên.", usage: "Used in essays linking economy and the environment.", usageVi: "Dùng trong bài luận kết nối kinh tế và môi trường.", example: "Transitioning to a sustainable economy requires global cooperation.", exampleVi: "Chuyển đổi sang nền kinh tế bền vững đòi hỏi sự hợp tác toàn cầu." }
  ]
};

const ACADEMIC_WORDS = [
  { word: "analyse / analysis / analytical", meaning: "To examine in detail", meaningVi: "Phân tích chi tiết", example: "We must analyse the causes before proposing solutions.", exampleVi: "Chúng ta phải phân tích nguyên nhân trước khi đề xuất giải pháp." },
  { word: "significant / significance / significantly", meaning: "Important or large in degree", meaningVi: "Quan trọng hoặc lớn về mức độ", example: "This is a significant factor in the debate.", exampleVi: "Đây là một yếu tố quan trọng trong cuộc tranh luận." },
  { word: "evaluate / evaluation", meaning: "To judge the value or quality of something", meaningVi: "Đánh giá giá trị hoặc chất lượng của cái gì đó", example: "It is essential to evaluate the evidence objectively.", exampleVi: "Điều quan trọng là phải đánh giá bằng chứng một cách khách quan." },
  { word: "argue / argument", meaning: "To give reasons for or against something", meaningVi: "Đưa ra lý do ủng hộ hoặc phản đối điều gì đó", example: "Some argue that technology has harmed social interaction.", exampleVi: "Một số người cho rằng công nghệ đã làm hại đến sự tương tác xã hội." },
  { word: "consider / consideration", meaning: "To think carefully about something", meaningVi: "Suy nghĩ cẩn thận về điều gì đó", example: "We should consider both sides of the argument.", exampleVi: "Chúng ta nên xem xét cả hai phía của lập luận." },
  { word: "contribute / contribution", meaning: "To give or add something to a shared goal", meaningVi: "Đóng góp vào mục tiêu chung", example: "Education contributes to long-term economic growth.", exampleVi: "Giáo dục đóng góp vào tăng trưởng kinh tế dài hạn." },
  { word: "demonstrate / demonstration", meaning: "To show or prove clearly", meaningVi: "Chứng minh hoặc minh họa rõ ràng", example: "Research demonstrates that exercise improves mood.", exampleVi: "Nghiên cứu chứng minh rằng tập thể dục cải thiện tâm trạng." },
  { word: "establish / establishment", meaning: "To set up or prove something firmly", meaningVi: "Thiết lập hoặc chứng minh điều gì đó vững chắc", example: "Governments must establish clear environmental policies.", exampleVi: "Chính phủ phải thiết lập các chính sách môi trường rõ ràng." },
  { word: "highlight", meaning: "To emphasise or draw attention to something", meaningVi: "Nhấn mạnh hoặc thu hút sự chú ý đến điều gì đó", example: "The report highlights the need for urgent action.", exampleVi: "Báo cáo nhấn mạnh sự cần thiết của hành động khẩn cấp." },
  { word: "impact (n/v) / impactful", meaning: "The effect or influence of something", meaningVi: "Tác động hoặc ảnh hưởng của điều gì đó", example: "The impact of social media on youth is widely debated.", exampleVi: "Tác động của mạng xã hội đối với giới trẻ được tranh luận rộng rãi." },
  { word: "imply / implication", meaning: "To suggest something without directly saying it", meaningVi: "Gợi ý mà không nói thẳng", example: "Rising unemployment implies a deeper economic problem.", exampleVi: "Thất nghiệp tăng ngụ ý một vấn đề kinh tế sâu hơn." },
  { word: "interpret / interpretation", meaning: "To explain the meaning of something", meaningVi: "Giải thích ý nghĩa của điều gì đó", example: "These results can be interpreted in several ways.", exampleVi: "Những kết quả này có thể được giải thích theo nhiều cách." },
  { word: "justify / justification", meaning: "To give reasons or evidence for something", meaningVi: "Đưa ra lý do hoặc bằng chứng cho điều gì đó", example: "It is difficult to justify spending cuts to education.", exampleVi: "Thật khó để biện minh cho việc cắt giảm chi tiêu cho giáo dục." },
  { word: "maintain / maintenance", meaning: "To keep something in its current state", meaningVi: "Duy trì điều gì đó trong trạng thái hiện tại", example: "Governments must maintain high educational standards.", exampleVi: "Chính phủ phải duy trì các tiêu chuẩn giáo dục cao." },
  { word: "obtain", meaning: "To get or acquire something", meaningVi: "Đạt được hoặc có được điều gì đó", example: "Many people struggle to obtain quality healthcare.", exampleVi: "Nhiều người gặp khó khăn trong việc tiếp cận chăm sóc sức khỏe chất lượng." },
  { word: "perceive / perception", meaning: "To become aware of or understand something", meaningVi: "Nhận thức hoặc hiểu điều gì đó", example: "Many perceive technology as both beneficial and risky.", exampleVi: "Nhiều người nhận thức công nghệ vừa có lợi vừa có rủi ro." },
  { word: "propose / proposal", meaning: "To suggest a plan or idea", meaningVi: "Đề xuất một kế hoạch hoặc ý tưởng", example: "This essay proposes several solutions to climate change.", exampleVi: "Bài luận này đề xuất một số giải pháp cho biến đổi khí hậu." },
  { word: "require / requirement", meaning: "To need something as necessary", meaningVi: "Cần điều gì đó là cần thiết", example: "A strong education system requires adequate funding.", exampleVi: "Một hệ thống giáo dục mạnh cần nguồn tài trợ đủ." },
  { word: "respond / response", meaning: "To reply or react to something", meaningVi: "Trả lời hoặc phản ứng với điều gì đó", example: "Governments must respond decisively to economic crises.", exampleVi: "Chính phủ phải phản ứng dứt khoát với các cuộc khủng hoảng kinh tế." },
  { word: "reveal / revelation", meaning: "To make something known", meaningVi: "Tiết lộ hoặc cho thấy điều gì đó", example: "Studies reveal a strong link between poverty and poor health.", exampleVi: "Các nghiên cứu tiết lộ mối liên hệ mạnh giữa nghèo đói và sức khỏe kém." },
  { word: "suggest / suggestion", meaning: "To put forward an idea for consideration", meaningVi: "Đề xuất một ý tưởng để xem xét", example: "Some experts suggest reducing tax on green products.", exampleVi: "Một số chuyên gia đề xuất giảm thuế cho sản phẩm xanh." },
  { word: "tend / tendency", meaning: "To be likely to behave in a certain way", meaningVi: "Có xu hướng hành động theo một cách nào đó", example: "Students tend to perform better in smaller classes.", exampleVi: "Học sinh có xu hướng học tốt hơn trong lớp nhỏ hơn." },
  { word: "undermine", meaning: "To weaken or damage something gradually", meaningVi: "Làm suy yếu hoặc phá hoại điều gì đó dần dần", example: "Corruption undermines public trust in government.", exampleVi: "Tham nhũng làm suy yếu niềm tin của công chúng vào chính phủ." },
  { word: "vary / variation / various", meaning: "To change or differ", meaningVi: "Thay đổi hoặc khác nhau", example: "The quality of healthcare varies significantly between regions.", exampleVi: "Chất lượng chăm sóc sức khỏe khác nhau đáng kể giữa các vùng." },
  { word: "address", meaning: "To deal with or discuss a problem or issue", meaningVi: "Giải quyết hoặc thảo luận về một vấn đề", example: "This essay will address the causes of social inequality.", exampleVi: "Bài luận này sẽ giải quyết các nguyên nhân của bất bình đẳng xã hội." },
  { word: "challenge (n/v) / challenging", meaning: "A difficult task; to question or dispute", meaningVi: "Thách thức; đặt câu hỏi hoặc tranh luận", example: "Poverty is one of the greatest challenges facing society.", exampleVi: "Nghèo đói là một trong những thách thức lớn nhất xã hội phải đối mặt." },
  { word: "effective / effectiveness / effectively", meaning: "Producing the desired result", meaningVi: "Tạo ra kết quả mong muốn", example: "Effective policies are essential to combat unemployment.", exampleVi: "Các chính sách hiệu quả là cần thiết để chống thất nghiệp." },
  { word: "emphasise / emphasis", meaning: "To give special importance to something", meaningVi: "Nhấn mạnh tầm quan trọng đặc biệt của điều gì đó", example: "It is important to emphasise the long-term consequences.", exampleVi: "Điều quan trọng là nhấn mạnh các hậu quả lâu dài." }
];

const LINKING_WORDS = {
  "Adding Ideas": {
    icon: "➕",
    vi: "Thêm ý tưởng",
    words: [
      { word: "Furthermore", vi: "Thêm vào đó", position: "Start of sentence", example: "Furthermore, renewable energy creates new job opportunities." },
      { word: "Moreover", vi: "Hơn nữa", position: "Start of sentence", example: "Moreover, online learning reduces educational costs significantly." },
      { word: "In addition", vi: "Ngoài ra", position: "Start of sentence", example: "In addition, the government should invest in public transport." },
      { word: "Additionally", vi: "Ngoài ra", position: "Start of sentence", example: "Additionally, diet plays a crucial role in maintaining health." },
      { word: "Besides", vi: "Bên cạnh đó", position: "Start or mid-sentence", example: "Besides improving fitness, sport teaches teamwork and discipline." },
      { word: "As well as", vi: "Cũng như", position: "Mid-sentence (before noun/gerund)", example: "Technology has changed education as well as the economy." },
      { word: "Not only ... but also", vi: "Không chỉ ... mà còn", position: "Start of sentence", example: "Not only does exercise improve fitness, but it also boosts mood." },
      { word: "What is more", vi: "Hơn thế nữa", position: "Start of sentence", example: "What is more, investment in green energy creates employment." },
      { word: "Apart from this", vi: "Ngoài điều này ra", position: "Start of sentence", example: "Apart from this, social media can be a source of misinformation." },
      { word: "Along with", vi: "Cùng với", position: "Mid-sentence", example: "Along with better pay, workers also need flexible hours." }
    ]
  },
  "Contrasting": {
    icon: "⚡",
    vi: "Tương phản",
    words: [
      { word: "However", vi: "Tuy nhiên", position: "Start of sentence", example: "However, technology cannot replace human creativity." },
      { word: "Nevertheless", vi: "Tuy nhiên", position: "Start of sentence", example: "Nevertheless, many countries still rely on fossil fuels." },
      { word: "On the other hand", vi: "Mặt khác", position: "Start of sentence", example: "On the other hand, remote work can cause feelings of isolation." },
      { word: "In contrast", vi: "Trái lại", position: "Start of sentence", example: "In contrast, developing nations often lack clean water access." },
      { word: "Although", vi: "Mặc dù", position: "Start of clause", example: "Although social media connects people, it can also isolate them." },
      { word: "Even though", vi: "Mặc dù", position: "Start of clause", example: "Even though automation creates efficiency, it eliminates jobs." },
      { word: "Despite", vi: "Mặc dù (+ noun/gerund)", position: "Mid-sentence", example: "Despite its benefits, technology poses serious privacy risks." },
      { word: "While", vi: "Trong khi", position: "Start of clause", example: "While urban areas benefit from technology, rural areas lag behind." },
      { word: "Whereas", vi: "Trong khi đó", position: "Start or mid-sentence", example: "The public sector focuses on welfare, whereas the private sector seeks profit." },
      { word: "Yet", vi: "Nhưng", position: "Start of sentence", example: "Technology has advanced rapidly, yet inequality persists." }
    ]
  },
  "Giving Examples": {
    icon: "📌",
    vi: "Cho ví dụ",
    words: [
      { word: "For example", vi: "Ví dụ", position: "Start of sentence", example: "For example, Finland has one of the world's best education systems." },
      { word: "For instance", vi: "Chẳng hạn", position: "Start of sentence", example: "For instance, solar energy can power entire communities." },
      { word: "Such as", vi: "Chẳng hạn như", position: "Mid-sentence (before noun)", example: "Many countries, such as Germany and Denmark, use renewable energy." },
      { word: "Including", vi: "Bao gồm", position: "Mid-sentence", example: "Several factors, including poverty and inequality, contribute to crime." },
      { word: "Namely", vi: "Cụ thể là", position: "Mid-sentence or start", example: "Two major causes exist, namely deforestation and carbon emissions." },
      { word: "In particular", vi: "Đặc biệt", position: "Start or after comma", example: "In particular, young people are most affected by social media." },
      { word: "To illustrate", vi: "Để minh họa", position: "Start of sentence", example: "To illustrate, Japan has successfully managed its ageing population." },
      { word: "As an example", vi: "Như một ví dụ", position: "Start of sentence", example: "As an example, Singapore has invested heavily in education." },
      { word: "This is evident in", vi: "Điều này rõ ràng trong", position: "Start of sentence", example: "This is evident in the falling literacy rates in rural communities." },
      { word: "A case in point is", vi: "Ví dụ điển hình là", position: "Start of sentence", example: "A case in point is Norway's success with electric vehicles." }
    ]
  },
  "Cause & Effect": {
    icon: "🔗",
    vi: "Nguyên nhân & Kết quả",
    words: [
      { word: "Therefore", vi: "Vì vậy", position: "Start of sentence", example: "Therefore, governments must act now on climate change." },
      { word: "As a result", vi: "Kết quả là", position: "Start of sentence", example: "As a result, air quality in major cities has improved." },
      { word: "Consequently", vi: "Do đó", position: "Start of sentence", example: "Consequently, unemployment rates rose sharply after the recession." },
      { word: "Thus", vi: "Vì thế", position: "Start or mid-sentence", example: "The data is incomplete; thus, conclusions must be drawn with caution." },
      { word: "Hence", vi: "Do đó", position: "Start of sentence", example: "Hence, investment in renewable energy is of utmost importance." },
      { word: "Because of this", vi: "Vì lý do này", position: "Start of sentence", example: "Because of this, more resources must be allocated to healthcare." },
      { word: "Due to", vi: "Do (+ noun)", position: "Mid-sentence", example: "Due to climate change, extreme weather events are more common." },
      { word: "Owing to", vi: "Do (more formal)", position: "Start or mid-sentence", example: "Owing to poor infrastructure, rural communities lack basic services." },
      { word: "This leads to", vi: "Điều này dẫn đến", position: "Mid or start", example: "Excessive screen time leads to poor concentration in students." },
      { word: "This results in", vi: "Điều này dẫn đến kết quả là", position: "Mid or start", example: "Automation results in the displacement of lower-skilled workers." }
    ]
  },
  "Conclusion": {
    icon: "🏁",
    vi: "Kết luận",
    words: [
      { word: "In conclusion", vi: "Kết lại", position: "Start of conclusion", example: "In conclusion, both individuals and governments must act responsibly." },
      { word: "To conclude", vi: "Để kết luận", position: "Start of conclusion", example: "To conclude, technology has brought both progress and problems." },
      { word: "To summarise", vi: "Tóm lại", position: "Start of conclusion", example: "To summarise, education reform requires long-term commitment." },
      { word: "Overall", vi: "Nhìn chung", position: "Start of sentence", example: "Overall, the benefits of globalisation outweigh its drawbacks." },
      { word: "On the whole", vi: "Nhìn chung", position: "Start of conclusion", example: "On the whole, preventive healthcare is more effective than curative care." },
      { word: "In summary", vi: "Tóm lại", position: "Start of conclusion", example: "In summary, tackling poverty needs a multi-faceted approach." },
      { word: "Ultimately", vi: "Cuối cùng", position: "Start of sentence", example: "Ultimately, the responsibility lies with both citizens and leaders." },
      { word: "All things considered", vi: "Xét tất cả mọi điều", position: "Start of sentence", example: "All things considered, renewable energy is the most viable solution." },
      { word: "Taking everything into account", vi: "Xét toàn bộ mọi yếu tố", position: "Start of sentence", example: "Taking everything into account, education remains the best investment." },
      { word: "It is clear that", vi: "Rõ ràng là", position: "Start of sentence", example: "It is clear that action on climate change can no longer be delayed." }
    ]
  }
};

const PHRASES = {
  "Introducing Arguments": [
    { phrase: "This essay will argue that...", when: "Introduce your main thesis at the start.", whenVi: "Bài luận này sẽ lập luận rằng...", example: "This essay will argue that technology has transformed modern education." },
    { phrase: "One of the main issues is...", when: "Introduce a key point or problem.", whenVi: "Một trong những vấn đề chính là...", example: "One of the main issues is the rising cost of university education." },
    { phrase: "A key point to consider is...", when: "Highlight an important argument.", whenVi: "Một điểm quan trọng cần xem xét là...", example: "A key point to consider is the environmental impact of plastic waste." },
    { phrase: "It is widely acknowledged that...", when: "Present a generally accepted fact.", whenVi: "Điều này được công nhận rộng rãi rằng...", example: "It is widely acknowledged that climate change poses a serious global threat." },
    { phrase: "There is growing concern about...", when: "Introduce a problem people are increasingly worried about.", whenVi: "Có mối lo ngại ngày càng tăng về...", example: "There is growing concern about the impact of social media on mental health." }
  ],
  "Giving Opinions": [
    { phrase: "In my opinion,...", when: "Express your personal view directly.", whenVi: "Theo ý kiến của tôi,...", example: "In my opinion, the government should increase spending on education." },
    { phrase: "I strongly believe that...", when: "Emphasise a strong personal view.", whenVi: "Tôi tin tưởng mạnh mẽ rằng...", example: "I strongly believe that renewable energy is the solution to the climate crisis." },
    { phrase: "From my perspective,...", when: "Introduce your viewpoint, slightly more formal.", whenVi: "Từ quan điểm của tôi,...", example: "From my perspective, technology cannot replace human teachers." },
    { phrase: "It seems to me that...", when: "Express an opinion with slight uncertainty.", whenVi: "Có vẻ như với tôi rằng...", example: "It seems to me that work-life balance has become increasingly difficult to maintain." },
    { phrase: "I would argue that...", when: "Introduce a reasoned argument or position.", whenVi: "Tôi muốn lập luận rằng...", example: "I would argue that poverty is the root cause of most social problems." }
  ],
  "Agreeing & Disagreeing": [
    { phrase: "I agree to some extent that...", when: "Agree partially, showing balance.", whenVi: "Tôi đồng ý một phần rằng...", example: "I agree to some extent that social media is harmful to teenagers." },
    { phrase: "While I accept that..., I still think...", when: "Acknowledge an opposing view, then give your position.", whenVi: "Mặc dù tôi chấp nhận rằng..., tôi vẫn nghĩ...", example: "While I accept that automation creates efficiency, I still think it threatens jobs." },
    { phrase: "Opponents of this view argue that...", when: "Present the counterargument fairly.", whenVi: "Những người phản đối quan điểm này cho rằng...", example: "Opponents of this view argue that stricter immigration policies are necessary." },
    { phrase: "This view has some merit; however,...", when: "Acknowledge a point before disagreeing.", whenVi: "Quan điểm này có một số điểm hợp lý; tuy nhiên,...", example: "This view has some merit; however, it ignores the long-term economic benefits." },
    { phrase: "I would challenge the idea that...", when: "Politely dispute an argument.", whenVi: "Tôi sẽ phản đối ý tưởng rằng...", example: "I would challenge the idea that economic growth always benefits all citizens." }
  ],
  "Concluding": [
    { phrase: "In conclusion, it is clear that...", when: "Open the final paragraph with a strong statement.", whenVi: "Kết lại, rõ ràng là...", example: "In conclusion, it is clear that urgent action is needed on climate change." },
    { phrase: "To summarise the key points,...", when: "Briefly restate the main ideas.", whenVi: "Để tóm tắt các điểm chính,...", example: "To summarise the key points, education, healthcare, and technology all require reform." },
    { phrase: "The evidence strongly suggests that...", when: "Draw a logical conclusion from the arguments.", whenVi: "Bằng chứng cho thấy mạnh mẽ rằng...", example: "The evidence strongly suggests that renewable energy is both viable and necessary." },
    { phrase: "Ultimately, the most important step is...", when: "Highlight the most critical recommendation.", whenVi: "Cuối cùng, bước quan trọng nhất là...", example: "Ultimately, the most important step is improving public awareness of environmental issues." },
    { phrase: "Only by [doing X] can we [achieve Y].", when: "End with a strong call to action structure.", whenVi: "Chỉ bằng cách [làm X] chúng ta mới có thể [đạt Y].", example: "Only by investing in education can we hope to reduce long-term inequality." }
  ]
};

const MISTAKES = [
  { wrong: "The technology have many benefits.", correct: "Technology has many benefits.", explanation: "When 'technology' is used as an uncountable noun, use singular verb 'has'.", explanationVi: "Khi 'technology' là danh từ không đếm được, dùng động từ số ít 'has'." },
  { wrong: "We must to protect the environment.", correct: "We must protect the environment.", explanation: "'Must' is a modal verb followed by the base form of the verb (no 'to').", explanationVi: "'Must' là động từ khiếm khuyết, theo sau là động từ nguyên thể không 'to'." },
  { wrong: "There are a lot of informations about this topic.", correct: "There is a lot of information about this topic.", explanation: "'Information' is an uncountable noun — no plural '-s', and uses singular verb.", explanationVi: "'Information' là danh từ không đếm được — không có '-s' số nhiều, dùng động từ số ít." },
  { wrong: "Despite of the challenges, they succeeded.", correct: "Despite the challenges, they succeeded.", explanation: "'Despite' is followed directly by a noun/gerund, NOT 'of'. Use 'In spite of' if you prefer.", explanationVi: "'Despite' trực tiếp theo sau danh từ/gerund, KHÔNG thêm 'of'." },
  { wrong: "This shows that government must take action.", correct: "This shows that the government must take action.", explanation: "Use 'the government' (definite article) when referring to a specific or known government.", explanationVi: "Dùng 'the government' (mạo từ xác định) khi đề cập đến một chính phủ cụ thể." },
  { wrong: "In my opinion, I think that this is wrong.", correct: "In my opinion, this is wrong.", explanation: "Avoid redundancy: 'In my opinion' and 'I think' mean the same thing — use only one.", explanationVi: "Tránh trùng lặp: 'In my opinion' và 'I think' cùng nghĩa — chỉ dùng một." },
  { wrong: "The most of people prefer online shopping.", correct: "Most people prefer online shopping.", explanation: "'Most' is used without 'the' when referring to a general group.", explanationVi: "'Most' được dùng không có 'the' khi đề cập đến nhóm chung." },
  { wrong: "Social medias are used by billions.", correct: "Social media is used by billions.", explanation: "'Social media' is treated as an uncountable noun in formal English — no plural '-s'.", explanationVi: "'Social media' được coi là danh từ không đếm được trong tiếng Anh trang trọng." },
  { wrong: "Although it is expensive, but many people buy it.", correct: "Although it is expensive, many people buy it.", explanation: "Never use 'although' and 'but' together — they are both contrast connectors.", explanationVi: "Không bao giờ dùng 'although' và 'but' cùng nhau vì cả hai đều là liên từ tương phản." },
  { wrong: "This essay will be discussing about the effects.", correct: "This essay will discuss the effects.", explanation: "After 'discuss', no preposition is needed. Also avoid continuous tense for essay signposting.", explanationVi: "Sau 'discuss', không cần giới từ. Cũng tránh dùng thì tiếp diễn cho signposting bài luận." }
];

const FILL_BLANK = [
  { num: 1, before: "The government must", blank: "_______", after: "urgent steps to tackle climate change.", answer: "take", note: "'take steps' is a fixed collocation meaning to begin action. / 'take steps' là cụm từ cố định có nghĩa là bắt đầu hành động." },
  { num: 2, before: "", blank: "_______", after: ", renewable energy is more efficient than fossil fuels.", answer: "Furthermore / Moreover / In addition", note: "These connectors are used to add a supporting point. / Các từ nối này dùng để thêm điểm hỗ trợ." },
  { num: 3, before: "", blank: "_______", after: "its high cost, solar power is becoming the dominant energy source.", answer: "Despite", note: "'Despite' + noun shows contrast. / 'Despite' + danh từ thể hiện sự tương phản." },
  { num: 4, before: "Education", blank: "_______", after: "to economic development by producing a skilled workforce.", answer: "contributes", note: "'Contribute to' (+ noun/gerund) is a key academic collocation. / 'Contribute to' là cụm từ học thuật quan trọng." },
  { num: 5, before: "", blank: "_______", after: "both countries invested heavily in technology, the results differed greatly.", answer: "Although / Even though / While", note: "Contrast connectors that introduce a subordinate clause. / Từ nối tương phản bắt đầu mệnh đề phụ." },
  { num: 6, before: "The study", blank: "_______", after: "a clear link between poverty and poor health outcomes.", answer: "reveals / demonstrates / shows", note: "Academic verbs for presenting research findings. / Động từ học thuật để trình bày kết quả nghiên cứu." },
  { num: 7, before: "In my", blank: "_______", after: ", governments should prioritise preventive healthcare.", answer: "opinion / view", note: "'In my opinion/view' are formal ways to state your position. / 'In my opinion/view' là cách trang trọng để nêu quan điểm." }
];

const REWRITE = [
  { num: 1, original: "Technology is good but it has some bad effects.", suggested: "Although technology offers significant benefits, it also poses serious drawbacks.", explanation: "Use 'Although' for contrast and more precise academic vocabulary. / Dùng 'Although' để tương phản và từ vựng học thuật chính xác hơn." },
  { num: 2, original: "Many people don't have enough money.", suggested: "A significant proportion of the population lives in poverty.", explanation: "More formal and academic phrasing for the same idea. / Diễn đạt trang trọng và học thuật hơn cho cùng một ý." },
  { num: 3, original: "Because of climate change, floods are more common.", suggested: "As a result of climate change, flooding has become increasingly frequent.", explanation: "'As a result of' is more formal; 'increasingly frequent' is better than 'more common'. / 'As a result of' trang trọng hơn; 'increasingly frequent' tốt hơn 'more common'." },
  { num: 4, original: "In my opinion, I think schools should teach more about the environment.", suggested: "In my opinion, schools should place greater emphasis on environmental education.", explanation: "Remove redundant 'I think'; use 'place emphasis on' and noun phrase for more formal style. / Loại bỏ 'I think' thừa; dùng 'place emphasis on' và cụm danh từ cho phong cách trang trọng hơn." }
];

// ---- STATE ----
let viHidden = false;
let darkMode = false;
let starred = JSON.parse(localStorage.getItem('b2_starred') || '[]');
let mastered = JSON.parse(localStorage.getItem('b2_mastered') || '[]');
let fcKnownCount = 0;
let fcHardCount = 0;
let fcTypedCount = 0;
let currentFcDeck = [];
let fcIndex = 0;
let quizData = [];
let quizIndex = 0;
let quizScore = 0;
let quizActive = false;
let currentTopic = 'all';

// ---- HELPERS ----
function saveProgress() {
  localStorage.setItem('b2_starred', JSON.stringify(starred));
  localStorage.setItem('b2_mastered', JSON.stringify(mastered));
  updateProgressUI();
}

function updateProgressUI() {
  const total = Object.values(VOCAB_DATA).flat().length + ACADEMIC_WORDS.length;
  const pct = Math.round((mastered.length / total) * 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = `${mastered.length} / ${total} mastered`;
}

function getWordId(topic, word) { return `${topic}::${word}`; }

function createVocabCard(item, topic) {
  const id = getWordId(topic, item.word);
  const isStarred = starred.includes(id);
  const isMastered = mastered.includes(id);
  return `
    <div class="vocab-card ${isMastered ? 'mastered' : ''} ${isStarred ? 'highlighted' : ''}"
         data-topic="${topic}" data-word="${item.word.toLowerCase()}" data-id="${id}">
      <div class="card-word">${item.word}</div>
      <div class="card-vi-word">${item.vi}</div>
      <div class="card-meaning-en">${item.meaning}</div>
      <div class="card-meaning-vi vi-text">${item.meaningVi}</div>
      <div class="card-usage-label">Usage</div>
      <div class="card-usage">${item.usage}</div>
      <div class="card-example">${item.example}</div>
      <div class="card-footer">
        <span class="card-topic-badge badge-${topic}">${topic.charAt(0).toUpperCase() + topic.slice(1)}</span>
        <div class="card-actions">
          <button class="star-btn ${isStarred ? 'starred' : ''}" data-id="${id}" title="Highlight">${isStarred ? '★' : '☆'}</button>
          <button class="master-btn ${isMastered ? 'mastered' : ''}" data-id="${id}" title="Mark mastered">${isMastered ? '✅' : '○'}</button>
        </div>
      </div>
    </div>`;
}

// ---- RENDER ----
function renderVocab() {
  Object.keys(VOCAB_DATA).forEach(topic => {
    const grid = document.getElementById(`${topic.substring(0,3) === 'hea' ? 'health' : topic.substring(0,3)}-grid`);
    const gridId = {education:'edu-grid', technology:'tech-grid', environment:'env-grid', health:'health-grid', society:'society-grid', economy:'economy-grid'}[topic];
    const el = document.getElementById(gridId);
    if (el) el.innerHTML = VOCAB_DATA[topic].map(w => createVocabCard(w, topic)).join('');
  });
}

function renderAcademic() {
  const tbody = document.getElementById('academicBody_table');
  tbody.innerHTML = ACADEMIC_WORDS.map((item, i) => {
    const id = getWordId('academic', item.word);
    const isStar = starred.includes(id);
    return `<tr>
      <td>${item.word}</td>
      <td>${item.meaning}<br><span class="vi-text td-vi">${item.meaningVi}</span></td>
      <td>${item.example}<br><span class="vi-text td-vi">${item.exampleVi}</span></td>
      <td class="star-cell">
        <button class="star-btn ${isStar ? 'starred' : ''}" data-id="${id}" title="Highlight">${isStar ? '★' : '☆'}</button>
      </td>
    </tr>`;
  }).join('');
}

function renderLinking() {
  const container = document.getElementById('linkingContent');
  container.innerHTML = Object.entries(LINKING_WORDS).map(([cat, data]) => `
    <div class="linking-group">
      <div class="linking-group-header">
        <span class="linking-icon">${data.icon}</span>
        <h4>${cat} <span class="vi-label">/ ${data.vi}</span></h4>
      </div>
      <div class="table-wrap">
        <table class="linking-table">
          <thead><tr><th>Connector</th><th class="td-vi">Vietnamese</th><th>Position</th><th>Example</th></tr></thead>
          <tbody>${data.words.map(w => `<tr>
            <td><span class="link-word">${w.word}</span></td>
            <td class="vi-text td-vi">${w.vi}</td>
            <td style="font-size:0.8rem;color:var(--text-muted)">${w.position}</td>
            <td style="font-style:italic;font-size:0.85rem">${w.example}</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
    </div>`).join('');
}

function renderPhrases() {
  const container = document.getElementById('phrasesContent');
  container.innerHTML = Object.entries(PHRASES).map(([cat, phrases]) => `
    <div class="phrase-group">
      <div class="phrase-group-title">${cat}</div>
      ${phrases.map(p => `<div class="phrase-card">
        <div class="phrase-text">${p.phrase}</div>
        <div class="phrase-when">When to use: ${p.when} <span class="vi-text">/ ${p.whenVi}</span></div>
        <div class="phrase-example">${p.example}</div>
      </div>`).join('')}
    </div>`).join('');
}

function renderMistakes() {
  const container = document.getElementById('mistakesList');
  container.innerHTML = MISTAKES.map(m => `
    <div class="mistake-card">
      <div>
        <div class="mistake-label">Wrong</div>
        <div class="mistake-wrong">${m.wrong}</div>
      </div>
      <div>
        <div class="mistake-label">Correct</div>
        <div class="mistake-correct">${m.correct}</div>
      </div>
      <div>
        <div class="mistake-label">Explanation</div>
        <div class="mistake-explanation">${m.explanation} <span class="vi-text">/ ${m.explanationVi}</span></div>
      </div>
    </div>`).join('');
}

function renderPractice() {
  // Fill in blanks
  const fibContainer = document.getElementById('fillBlankExercises');
  fibContainer.innerHTML = FILL_BLANK.map(q => `
    <div class="fib-question">
      <div class="fib-num">Question ${q.num}</div>
      <div class="fib-sentence">${q.before} <strong>[_______]</strong> ${q.after}</div>
      <div style="display:flex;align-items:center;gap:8px">
        <input type="text" class="fib-input" placeholder="Your answer..." data-q="${q.num}" />
        <button class="btn btn-primary btn-sm fib-check" data-q="${q.num}">Check</button>
        <button class="btn btn-ghost btn-sm fib-reveal" data-q="${q.num}">Show Answer</button>
      </div>
      <div class="fib-answer" id="fib-ans-${q.num}">✅ <strong>Answer:</strong> ${q.answer} — ${q.note}</div>
    </div>`).join('');

  // Rewrite
  const rwContainer = document.getElementById('rewriteExercises');
  rwContainer.innerHTML = REWRITE.map(q => `
    <div class="rw-question">
      <div class="fib-num">Question ${q.num}</div>
      <div class="rw-original">📝 Original: "${q.original}"</div>
      <textarea class="rw-input" rows="2" placeholder="Write your improved version here..."></textarea>
      <button class="btn btn-ghost btn-sm rw-show-ans" data-q="${q.num}">Show Suggested Answer</button>
      <div class="rw-answer" id="rw-ans-${q.num}">
        <div class="rw-suggested">✅ ${q.suggested}</div>
        <div class="rw-explain">${q.explanation}</div>
      </div>
    </div>`).join('');
}

// ---- SEARCH ----
function getAllWords() {
  const words = [];
  Object.entries(VOCAB_DATA).forEach(([topic, items]) => items.forEach(w => words.push({ ...w, topic })));
  ACADEMIC_WORDS.forEach(w => words.push({ ...w, topic: 'academic', vi: '' }));
  return words;
}

function doSearch(query) {
  const q = query.trim().toLowerCase();
  const resultsSection = document.getElementById('searchResults');
  const searchGrid = document.getElementById('searchGrid');
  const searchCount = document.getElementById('searchCount');
  document.getElementById('searchClear').classList.toggle('visible', q.length > 0);

  if (!q) {
    resultsSection.classList.add('hidden');
    document.getElementById('mainContent').querySelectorAll('.content-section').forEach(s => s.style.display = '');
    return;
  }

  const all = getAllWords();
  const results = all.filter(w =>
    w.word.toLowerCase().includes(q) ||
    (w.vi && w.vi.toLowerCase().includes(q)) ||
    w.meaning.toLowerCase().includes(q) ||
    (w.meaningVi && w.meaningVi.toLowerCase().includes(q))
  );

  resultsSection.classList.remove('hidden');
  document.getElementById('mainContent').querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
  resultsSection.style.display = '';
  searchCount.textContent = `${results.length} results`;
  searchGrid.innerHTML = results.length
    ? results.map(w => createVocabCard(w, w.topic)).join('')
    : '<p style="color:var(--text-muted);padding:20px">No words found. Try a different search term.</p>';
  bindCardButtons();
}

// ---- TOPIC FILTER ----
function doTopicFilter(topic) {
  currentTopic = topic;
  document.getElementById('searchResults').classList.add('hidden');
  document.getElementById('mainContent').querySelectorAll('.content-section').forEach(s => s.style.display = '');
  if (topic === 'all') {
    document.querySelectorAll('.topic-group').forEach(g => g.style.display = '');
  } else {
    document.querySelectorAll('.topic-group').forEach(g => {
      g.style.display = (g.dataset.topic === topic) ? '' : 'none';
    });
    const vocabSection = document.getElementById('vocabulary');
    vocabSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ---- VI TOGGLE ----
function toggleVi() {
  viHidden = !viHidden;
  document.body.classList.toggle('vi-hidden', viHidden);
  document.getElementById('viToggle').textContent = viHidden ? '🇻🇳 Show VI' : '🇻🇳 VI';
}

// ---- DARK MODE ----
function toggleDark() {
  darkMode = !darkMode;
  document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  document.getElementById('darkToggle').textContent = darkMode ? '☀️' : '🌙';
  localStorage.setItem('b2_dark', darkMode);
}

// ---- CARD BUTTONS ----
function bindCardButtons() {
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (starred.includes(id)) { starred = starred.filter(x => x !== id); }
      else { starred.push(id); }
      saveProgress();
      // Re-render
      renderVocab(); renderAcademic();
      bindCardButtons();
    });
  });
  document.querySelectorAll('.master-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (mastered.includes(id)) { mastered = mastered.filter(x => x !== id); }
      else { mastered.push(id); }
      saveProgress();
      renderVocab(); renderAcademic();
      bindCardButtons();
    });
  });
}

// ---- COLLAPSE ----
function setupCollapse() {
  document.querySelectorAll('.collapse-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const body = document.getElementById(targetId);
      if (!body) return;
      body.classList.toggle('collapsed');
      btn.classList.toggle('collapsed');
    });
  });
}

// ---- PRACTICE TABS ----
function setupPracticeTabs() {
  document.querySelectorAll('.ptab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.ptab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.ptab).classList.add('active');
    });
  });

  // FIB check buttons
  document.getElementById('fillBlankExercises').addEventListener('click', (e) => {
    if (e.target.classList.contains('fib-check')) {
      const q = parseInt(e.target.dataset.q);
      const input = document.querySelector(`.fib-input[data-q="${q}"]`);
      const question = FILL_BLANK.find(x => x.num === q);
      const accepted = question.answer.toLowerCase().split(' / ').map(x => x.trim());
      const userVal = input.value.trim().toLowerCase();
      const correct = accepted.some(a => userVal.includes(a) || a.includes(userVal));
      input.classList.toggle('correct', correct);
      input.classList.toggle('incorrect', !correct);
      document.getElementById(`fib-ans-${q}`).classList.add('show');
    }
    if (e.target.classList.contains('fib-reveal')) {
      const q = parseInt(e.target.dataset.q);
      document.getElementById(`fib-ans-${q}`).classList.add('show');
    }
  });

  // Rewrite reveal
  document.getElementById('rewriteExercises').addEventListener('click', (e) => {
    if (e.target.classList.contains('rw-show-ans')) {
      const q = parseInt(e.target.dataset.q);
      document.getElementById(`rw-ans-${q}`).classList.add('show');
    }
  });
}

// ---- QUIZ ----
function buildQuizDeck() {
  const allWords = getAllWords().filter(w => w.vi || w.meaningVi);
  // Shuffle
  for (let i = allWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
  }
  return allWords.slice(0, 10);
}

function getWrongOptions(correct, all) {
  const pool = all.filter(w => w.word !== correct.word && w.meaning !== correct.meaning);
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  return shuffled.map(w => w.meaning);
}

function showQuizQuestion() {
  const all = getAllWords();
  const q = quizData[quizIndex];
  const wrong = getWrongOptions(q, all);
  const options = [q.meaning, ...wrong].sort(() => Math.random() - 0.5);

  document.getElementById('quizWord').textContent = q.word;
  document.getElementById('quizProgress').textContent = `Question ${quizIndex + 1} / ${quizData.length}`;
  document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
  document.getElementById('quizProgFill').style.width = `${(quizIndex / quizData.length) * 100}%`;
  document.getElementById('quizCard').classList.remove('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizFinal').classList.add('hidden');

  const optsEl = document.getElementById('quizOptions');
  optsEl.innerHTML = options.map(opt => `<button class="quiz-opt">${opt}</button>`).join('');
  optsEl.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => handleQuizAnswer(btn, q.meaning, q));
  });
}

function handleQuizAnswer(btn, correct, q) {
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  const isCorrect = btn.textContent === correct;
  if (isCorrect) { btn.classList.add('correct'); quizScore++; }
  else {
    btn.classList.add('incorrect');
    document.querySelectorAll('.quiz-opt').forEach(b => { if (b.textContent === correct) b.classList.add('correct'); });
  }
  document.getElementById('quizCard').classList.add('hidden');
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  document.getElementById('resultIcon').textContent = isCorrect ? '🎉' : '😢';
  document.getElementById('resultMsg').textContent = isCorrect ? 'Correct!' : 'Not quite...';
  document.getElementById('resultExplain').textContent = `"${q.word}" means: ${q.meaning}${q.meaningVi ? ' / ' + q.meaningVi : ''}`;
}

document.getElementById('nextQuizBtn').addEventListener('click', () => {
  quizIndex++;
  if (quizIndex >= quizData.length) {
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizFinal').classList.remove('hidden');
    document.getElementById('finalScore').innerHTML = `${quizScore} / ${quizData.length} <small>🎯</small>`;
    document.getElementById('quizProgFill').style.width = '100%';
  } else {
    showQuizQuestion();
  }
});

document.getElementById('startQuiz').addEventListener('click', () => {
  document.getElementById('startQuiz').classList.add('hidden');
  document.getElementById('quizWrap').classList.remove('hidden');
  quizData = buildQuizDeck();
  quizIndex = 0;
  quizScore = 0;
  quizActive = true;
  showQuizQuestion();
});

document.getElementById('restartQuiz').addEventListener('click', () => {
  quizData = buildQuizDeck();
  quizIndex = 0;
  quizScore = 0;
  showQuizQuestion();
});

document.getElementById('quizWrap').classList.add('hidden');

// ---- FLASHCARDS ----
function buildFcDeck(topic) {
  let deck = [];
  if (topic === 'all') {
    Object.entries(VOCAB_DATA).forEach(([t, items]) => items.forEach(w => deck.push({ ...w, topic: t })));
    ACADEMIC_WORDS.forEach(w => deck.push({ ...w, topic: 'academic', vi: '' }));
  } else if (topic === 'academic') {
    deck = ACADEMIC_WORDS.map(w => ({ ...w, topic: 'academic', vi: '' }));
  } else {
    deck = (VOCAB_DATA[topic] || []).map(w => ({ ...w, topic }));
  }
  // Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function closeTypingPanel() {
  const panel = document.getElementById('fcTypingPanel');
  panel.classList.add('hidden');
  document.getElementById('fcWord').classList.remove('fc-word-hidden');
  const input = document.getElementById('fcTypingInput');
  input.value = '';
  input.classList.remove('fc-type-correct', 'fc-type-incorrect');
  const result = document.getElementById('fcTypingResult');
  result.classList.add('hidden');
  result.className = 'fc-typing-result hidden';
}

function showFcCard() {
  const card = currentFcDeck[fcIndex];
  if (!card) return;
  document.getElementById('fcWord').textContent = card.word;
  document.getElementById('fcTopicTag').textContent = `📌 ${card.topic.charAt(0).toUpperCase() + card.topic.slice(1)}${card.vi ? ' — ' + card.vi : ''}`;
  document.getElementById('fcEnMeaning').textContent = card.meaning;
  document.getElementById('fcViMeaning').textContent = card.meaningVi || '';
  document.getElementById('fcExample').textContent = card.example || '';
  document.getElementById('fcCounter').textContent = `${fcIndex + 1} / ${currentFcDeck.length}`;
  document.getElementById('flashcard').classList.remove('flipped');
  closeTypingPanel();
}

document.getElementById('flashcardBtn').addEventListener('click', () => {
  fcKnownCount = 0; fcHardCount = 0; fcTypedCount = 0;
  document.getElementById('fcKnown').textContent = 0;
  document.getElementById('fcHard2').textContent = 0;
  document.getElementById('fcTypedCount').textContent = 0;
  currentFcDeck = buildFcDeck('all');
  fcIndex = 0;
  showFcCard();
  document.getElementById('flashcardModal').classList.remove('hidden');
});
document.getElementById('closeFlashcard').addEventListener('click', () => {
  document.getElementById('flashcardModal').classList.add('hidden');
});
document.getElementById('flashcardModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('flashcardModal')) document.getElementById('flashcardModal').classList.add('hidden');
});
document.getElementById('flashcard').addEventListener('click', () => {
  document.getElementById('flashcard').classList.toggle('flipped');
});
document.getElementById('fcPrev').addEventListener('click', () => { if (fcIndex > 0) { fcIndex--; showFcCard(); } });
document.getElementById('fcNext').addEventListener('click', () => { if (fcIndex < currentFcDeck.length - 1) { fcIndex++; showFcCard(); } });
document.getElementById('fcEasy').addEventListener('click', () => { fcKnownCount++; document.getElementById('fcKnown').textContent = fcKnownCount; if (fcIndex < currentFcDeck.length - 1) { fcIndex++; showFcCard(); } });
document.getElementById('fcHard').addEventListener('click', () => { fcHardCount++; document.getElementById('fcHard2').textContent = fcHardCount; if (fcIndex < currentFcDeck.length - 1) { fcIndex++; showFcCard(); } });
document.getElementById('fcTopicFilter').addEventListener('change', (e) => { currentFcDeck = buildFcDeck(e.target.value); fcIndex = 0; showFcCard(); });

// ---- FLASHCARD TYPING MODE ----
function makeHint(word) {
  // Show first letter(s) and blanks for the rest, preserve spaces
  return word.split('').map((ch, i) => {
    if (ch === ' ') return ' ';
    if (i === 0) return ch;
    // For multi-word: reveal first letter of each word
    if (i > 0 && word[i-1] === ' ') return ch;
    return '_';
  }).join('');
}

document.getElementById('fcTypeBtn').addEventListener('click', () => {
  const card = currentFcDeck[fcIndex];
  if (!card) return;
  const panel = document.getElementById('fcTypingPanel');
  // Toggle panel
  if (!panel.classList.contains('hidden')) {
    closeTypingPanel();
    return;
  }
  // Hide the word on card
  document.getElementById('fcWord').classList.add('fc-word-hidden');
  // Make sure card flips back to front
  document.getElementById('flashcard').classList.remove('flipped');
  // Show hint (first letter of each word)
  document.getElementById('fcTypingHint').textContent = makeHint(card.word);
  // Show meaning as clue
  let clue = card.meaning || '';
  if (card.meaningVi) clue += ' / ' + card.meaningVi;
  document.getElementById('fcTypingMeaning').textContent = clue;
  // Reset input
  const input = document.getElementById('fcTypingInput');
  input.value = '';
  input.classList.remove('fc-type-correct', 'fc-type-incorrect');
  const result = document.getElementById('fcTypingResult');
  result.classList.add('hidden');
  result.className = 'fc-typing-result hidden';
  // Show panel
  panel.classList.remove('hidden');
  // Focus input
  setTimeout(() => input.focus(), 50);
});

document.getElementById('fcTypingClose').addEventListener('click', closeTypingPanel);

function checkTypingAnswer() {
  const card = currentFcDeck[fcIndex];
  if (!card) return;
  const input = document.getElementById('fcTypingInput');
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = card.word.trim().toLowerCase();
  const result = document.getElementById('fcTypingResult');

  if (!userAnswer) {
    input.focus();
    return;
  }

  const isCorrect = userAnswer === correctAnswer;
  input.classList.remove('fc-type-correct', 'fc-type-incorrect');
  result.classList.remove('hidden', 'result-correct', 'result-incorrect');

  if (isCorrect) {
    input.classList.add('fc-type-correct');
    result.classList.add('result-correct');
    result.innerHTML = `✅ Correct! <strong>${card.word}</strong> — well done!`;
    fcTypedCount++;
    document.getElementById('fcTypedCount').textContent = fcTypedCount;
  } else {
    input.classList.add('fc-type-incorrect');
    result.classList.add('result-incorrect');
    result.innerHTML = `❌ Not quite. The correct answer is: <strong>${card.word}</strong>`;
  }

  // Reveal the word on the card
  document.getElementById('fcWord').classList.remove('fc-word-hidden');
}

document.getElementById('fcTypingCheck').addEventListener('click', checkTypingAnswer);
document.getElementById('fcTypingInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkTypingAnswer();
});

// ---- SIDEBAR ACTIVE ----
function setupScrollSpy() {
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}

// ---- MOBILE SIDEBAR ----
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('hidden');
});
document.getElementById('sidebarOverlay').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.add('hidden');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.add('hidden');
  });
});

// ---- TOPIC BUTTONS ----
document.querySelectorAll('.topic-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('globalSearch').value = '';
    document.getElementById('searchClear').classList.remove('visible');
    doTopicFilter(btn.dataset.topic);
  });
});

// ---- SEARCH ----
const searchInput = document.getElementById('globalSearch');
let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    doSearch(searchInput.value);
    if (searchInput.value.length > 0) bindCardButtons();
  }, 250);
});
document.getElementById('searchClear').addEventListener('click', () => {
  searchInput.value = '';
  doSearch('');
});

// ---- VI TOGGLE ----
document.getElementById('viToggle').addEventListener('click', toggleVi);

// ---- DARK TOGGLE ----
document.getElementById('darkToggle').addEventListener('click', toggleDark);

// ---- RESET PROGRESS ----
document.getElementById('resetProgress').addEventListener('click', () => {
  if (confirm('Reset all progress? This cannot be undone.')) {
    starred = []; mastered = [];
    saveProgress();
    renderVocab(); renderAcademic();
    bindCardButtons();
  }
});

// ---- INIT ----
function init() {
  // Load preferences
  const savedDark = localStorage.getItem('b2_dark');
  if (savedDark === 'true') { darkMode = true; document.body.setAttribute('data-theme', 'dark'); document.getElementById('darkToggle').textContent = '☀️'; }

  renderVocab();
  renderAcademic();
  renderLinking();
  renderPhrases();
  renderMistakes();
  renderPractice();
  bindCardButtons();
  setupCollapse();
  setupPracticeTabs();
  setupScrollSpy();
  updateProgressUI();

  // Smooth nav scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        const headerH = document.querySelector('.site-header').offsetHeight;
        window.scrollTo({ top: target.offsetTop - headerH - 10, behavior: 'smooth' });
      }
    });
  });
}

init();