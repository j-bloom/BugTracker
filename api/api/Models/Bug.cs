namespace api.Models
{
    public class Bug
    {
        public int BugId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AffectedArea { get; set; }
        public string Assignee { get; set; }
        public int Status { get; set; }
        public int Priority { get; set; }
        public DateTime DateBugCreated { get; set; }
        public DateTime DateLastUpdated { get; set; }
        public string? PhotoImageName { get; set; }
    }
}
