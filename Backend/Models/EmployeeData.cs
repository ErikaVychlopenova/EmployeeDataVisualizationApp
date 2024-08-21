namespace Backend.Models
{
    public class EmployeeData
    {
        public Guid Id { get; set; }
        public string EmployeeName { get; set; } = string.Empty;
        public DateTime StarTimeUtc { get; set; }
        public DateTime EndTimeUtc { get; set; }
        public string EntryNotes { get; set; } = string.Empty;
        public DateTime? DeletedOn { get; set; }
    }
}