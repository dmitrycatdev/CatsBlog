using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class UsersImageBase64Added : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageBase64",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageBase64",
                table: "Users");
        }
    }
}
