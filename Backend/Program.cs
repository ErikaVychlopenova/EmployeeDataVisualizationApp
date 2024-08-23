using Backend.Services;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        ConfigureServices(builder.Services);
        var app = builder.Build();
        ConfigureMiddleware(app);
        app.Run();
    }

    private static void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        services.AddSwaggerGen();

        // Configure CORS policy
        services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigin",
                builder =>
                {
                    builder.WithOrigins("http://localhost:4200") // Allow this origin
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
        });

        services.AddHttpClient<EmployeeDataService>();
        services.AddSingleton<EmployeeDataService>(sp =>
        {
            var httpClient = sp.GetRequiredService<HttpClient>();
            var configuration = sp.GetRequiredService<IConfiguration>();
            return new EmployeeDataService(httpClient, configuration);
        });
    }

    private static void ConfigureMiddleware(WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors("AllowSpecificOrigin");
        app.UseAuthorization();
        app.MapControllers();
    }
}