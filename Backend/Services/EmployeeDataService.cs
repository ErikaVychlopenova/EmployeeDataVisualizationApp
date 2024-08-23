using System.Text.Json;
using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Services
{
    public class EmployeeDataService
    {
        private readonly HttpClient _httpClient;
        private readonly string _employeeDataUrl;

        public EmployeeDataService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _employeeDataUrl = "https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";
        }

        public async Task<List<EmployeeData>> GetEmployeeDataAsync()
        {
            try
            {
                var response = await _httpClient.GetStringAsync(_employeeDataUrl);
                var employeeDataList = JsonSerializer.Deserialize<List<EmployeeData>>(response);
                return employeeDataList ?? new List<EmployeeData>();
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request error: {e.Message}");
                return new List<EmployeeData>();
            }
            catch (JsonException e)
            {
                Console.WriteLine($"Deserialization error: {e.Message}");
                return new List<EmployeeData>();
            }
        }
    }
}