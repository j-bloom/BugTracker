using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BugController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public BugController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            SELECT BugId, 
                                   Title, 
                                   Description, 
                                   AffectedArea, 
                                   Assignee, 
                                   Status, 
                                   Priority, 
                                   DateBugCreated, 
                                   DateLastUpdated
                            FROM dbo.Bug
                            ";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BugTrackerAppConnection");
            SqlDataReader sqlDataReader;

            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    sqlDataReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlDataReader);
                    sqlDataReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult(dt);
        }

        [HttpPost]
        public JsonResult Post(Bug bug)
        {
            string query = @"
                            INSERT INTO dbo.Bug
                            VALUES (@Title, 
                                    @Description, 
                                    @AffectedArea, 
                                    @Assignee, 
                                    @Status, 
                                    @Priority, 
                                    @DateBugCreated, 
                                    @DateLastUpdated)
                            ";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BugTrackerAppConnection");
            SqlDataReader sqlDataReader;

            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    sqlCommand.Parameters.AddWithValue("@Title", bug.Title);
                    sqlCommand.Parameters.AddWithValue("@Description", bug.Description);
                    sqlCommand.Parameters.AddWithValue("@AffectedArea", bug.AffectedArea);
                    sqlCommand.Parameters.AddWithValue("@Assignee", bug.Assignee);
                    sqlCommand.Parameters.AddWithValue("@Status", bug.Status);
                    sqlCommand.Parameters.AddWithValue("@Priority", bug.Priority);
                    sqlCommand.Parameters.AddWithValue("@DateBugCreated", bug.DateBugCreated);
                    sqlCommand.Parameters.AddWithValue("@DateLastUpdated", bug.DateLastUpdated);
                    sqlDataReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlDataReader);
                    sqlDataReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult("New Bug added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Bug bug)
        {
            string query = @"
                            UPDATE dbo.Bug
                            SET Title=@Title, 
                                Description=@Description, 
                                AffectedArea=@AffectedArea, 
                                Assignee=@Assignee, 
                                Status=@Status, 
                                Priority=@Priority, 
                                DateBugCreated=@DateBugCreated, 
                                DateLastUpdated=@DateLastUpdated
                            WHERE BugId=@BugId
                            ";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BugTrackerAppConnection");
            SqlDataReader sqlDataReader;

            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    sqlCommand.Parameters.AddWithValue("@BugId", bug.BugId);
                    sqlCommand.Parameters.AddWithValue("@Title", bug.Title);
                    sqlCommand.Parameters.AddWithValue("@Description", bug.Description);
                    sqlCommand.Parameters.AddWithValue("@AffectedArea", bug.AffectedArea);
                    sqlCommand.Parameters.AddWithValue("@Assignee", bug.Assignee);
                    sqlCommand.Parameters.AddWithValue("@Status", bug.Status);
                    sqlCommand.Parameters.AddWithValue("@Priority", bug.Priority);
                    sqlCommand.Parameters.AddWithValue("@DateBugCreated", bug.DateBugCreated);
                    sqlCommand.Parameters.AddWithValue("@DateLastUpdated", bug.DateLastUpdated);
                    sqlDataReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlDataReader);
                    sqlDataReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult("Bug updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                            DELETE FROM dbo.Bug
                            WHERE BugId=@BugId
                            ";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BugTrackerAppConnection");
            SqlDataReader sqlDataReader;

            using (SqlConnection sqlConnection = new SqlConnection(sqlDataSource))
            {
                sqlConnection.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, sqlConnection))
                {
                    sqlCommand.Parameters.AddWithValue("@BugId", id);
                    sqlDataReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlDataReader);
                    sqlDataReader.Close();
                    sqlConnection.Close();
                }
            }
            return new JsonResult("Bug deleted Successfully");
        }
    }
}
